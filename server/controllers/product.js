const Product = require("../models/product")
const asyncHandler = require("express-async-handler")
const slugify = require("slugify")
const makeSKU = require("uniqid")
const groupBy = require("../ultils/groupBy")

const createProduct = asyncHandler(async (req, res) => {
  const { title, price, description, brand, category, color, origin, material, sexual, size} = req.body
  const thumb = "/products/" + req?.files?.thumb[0]?.filename
  const images = req.files?.images?.map((el) => "/products/" + el.filename)
  if (!(title && price && description && category ))
    throw new Error("Missing inputs")
  const varriants = {
    color: [...new Set(color)].filter((el) => el !== ""),
    origin: [...new Set(origin)].filter((el) => el !== ""),
    material: [...new Set(material)].filter((el) => el !== ""),
    sexual: [...new Set(sexual)].filter((el) => el !== ""),
    size: [...new Set(size)].filter((el) => el !== "")
  }
  req.body.slug = slugify(title)
  if (thumb) req.body.thumb = thumb
  if (images) req.body.images = images
  if (varriants) req.body.varriants = varriants
  if (!req.body.percentDiscount) req.body.percentDiscount = parseFloat(+req.body.discount / +req.body.price * 100).toFixed(2)
  const newProduct = await Product.create(req.body)
  // newProduct.thumb = serverUrl + newProduct.thumb
  // newProduct.images = newProduct.images.map((el) => serverUrl + el)
  return res.status(200).json({
    success: !!newProduct,
    mes: newProduct ? "Created" : "Failed.",
    productData: newProduct ? newProduct : "Cannot create product",
  })
})
const getProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params
  const product = await Product.findById(pid).populate({
    path: "ratings",
    populate: {
      path: "postedBy",
      select: "firstname lastname avatar",
    },
  })
  // const serverUrl = `${req.protocol}://${req.get('host')}`
  // product.thumb = serverUrl + product.thumb
  // product.images = product.images.map((el) => serverUrl + el)
  return res.status(200).json({
    success: !!product,
    productData: product ? product : "Cannot get product",
  })
})
// Filtering, sorting & pagination
const getProducts = asyncHandler(async (req, res) => {
  const queries = { ...req.query }
  // Tách các trường đặc biệt ra khỏi query
  const excludeFields = ["limit", "sort", "page", "fields"]
  excludeFields.forEach((el) => delete queries[el])

  // Format lại các operators cho đúng cú pháp mongoose
  let queryString = JSON.stringify(queries)
  queryString = queryString.replace(
    /\b(gte|gt|lt|lte)\b/g,
    (macthedEl) => `$${macthedEl}`
  )
  const formatedQueries = JSON.parse(queryString)
  let colorQueryObject = {}
  if (queries?.title)
    formatedQueries.title = { $regex: queries.title, $options: "i" }
  if (queries?.category)
    formatedQueries.category = { $regex: queries.category, $options: "i" }
  if (queries?.brand)
    formatedQueries.brand = { $regex: queries.brand, $options: "i" }
  if (queries?.color) {
    delete formatedQueries.color
    const colorArr = queries.color?.split(",")
    const colorQuery = colorArr.map((el) => ({
      color: { $regex: el, $options: "i" },
    }))
    colorQueryObject = { $or: colorQuery }
  }
  let queryObject = {}
  if (queries?.q) {
    delete formatedQueries.q
    queryObject = {
      $or: [
        { color: { $regex: queries.q, $options: "i" } },
        { title: { $regex: queries.q, $options: "i" } },
        { category: { $regex: queries.q, $options: "i" } },
        { brand: { $regex: queries.q, $options: "i" } },
        // { description: { $regex: queries.q, $options: 'i' } },
      ],
    }
  }
  const qr = { ...colorQueryObject, ...formatedQueries, ...queryObject }
  let queryCommand = Product.find(qr)

  // Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ")
    queryCommand = queryCommand.sort(sortBy)
  }

  // Fields limiting
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ")
    queryCommand = queryCommand.select(fields)
  }

  // Pagination
  const page = +req.query.page || 1
  const limit = +req.query.limit || process.env.LIMIT_PRODUCTS
  const skip = (page - 1) * limit
  queryCommand.skip(skip).limit(limit)
  // Execute query
  // Số lượng sp thỏa mãn điều kiện !== số lượng sp trả về 1 lần gọi API
  queryCommand.exec(async (err, response) => {
    if (err) throw new Error(err.message)
    const counts = await Product.find(qr).countDocuments()
    return res.status(200).json({
      success: !!response,
      counts,
      products: response ? response : "Cannot get products",
    })
  })
})
const updateProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params
  const files = req?.files
  if (req.body.thumb) req.body.thumb = "/products/" + files?.thumb[0]?.filename
  if (req.body.images) req.body.images = files?.images?.map((el) => "/products/" + el.filename)
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title)
  const updatedProduct = await Product.findByIdAndUpdate(pid, req.body, {
    new: true,
  })
  if (!updatedProduct) throw new Error("Cannot update product")
  // const serverUrl = `${req.protocol}://${req.get('host')}`
  // updatedProduct.thumb = serverUrl + updatedProduct.thumb
  // updatedProduct.images = updatedProduct.images.map((el) => serverUrl + el)
  return res.status(200).json({
    success: !!updatedProduct,
    mes: updatedProduct ? "Updated." : "Cannot update product",
    updatedProduct
  })
})
const deleteProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params
  const deletedProduct = await Product.findByIdAndDelete(pid)
  return res.status(200).json({
    success: deletedProduct ? true : false,
    mes: deletedProduct ? "Deleted." : "Cannot delete product",
  })
})
const ratings = asyncHandler(async (req, res) => {
  const { _id } = req.user
  const { star, comment, pid, updatedAt } = req.body
  if (!star || !pid) throw new Error("Missing inputs")
  const ratingProduct = await Product.findById(pid)
  const alreadyRating = ratingProduct?.ratings?.find(
    (el) => el.postedBy.toString() === _id
  )
  // console.log(alreadyRating);
  if (alreadyRating) {
    // update star & comment
    await Product.updateOne(
      {
        ratings: { $elemMatch: alreadyRating },
      },
      {
        $set: {
          "ratings.$.star": star,
          "ratings.$.comment": comment,
          "ratings.$.updatedAt": updatedAt,
        },
      },
      { new: true }
    )
  } else {
    // add star & comment
    await Product.findByIdAndUpdate(
      pid,
      {
        $push: { ratings: { star, comment, postedBy: _id, updatedAt } },
      },
      { new: true }
    )
  }

  // Sum ratings
  const updatedProduct = await Product.findById(pid)
  const ratingCount = updatedProduct.ratings.length
  const sumRatings = updatedProduct.ratings.reduce(
    (sum, el) => sum + +el.star,
    0
  )
  updatedProduct.totalRatings = Math.round((sumRatings * 10) / ratingCount) / 10

  await updatedProduct.save()

  return res.status(200).json({
    success: true,
    updatedProduct,
  })
})
const uploadImagesProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params
  if (!req.files) throw new Error("Missing inputs")
  const response = await Product.findByIdAndUpdate(
    pid,
    { $push: { images: { $each: req.files.map((el) => el.path) } } },
    { new: true }
  )
  return res.status(200).json({
    success: response ? true : false,
    updatedProduct: response ? response : "Cannot upload images product",
  })
})
const uploadImageDescription = asyncHandler(async (req, res) => {
  if (!req.files) throw new Error("Missing inputs")

})
const addVarriant = asyncHandler(async (req, res) => {
  const { pid } = req.params
  const { title, color, origin, material, sexual, size } = req.body
  if (!(title, color, origin, material, sexual, size)) throw new Error("Missing inputs")
  const varriants = {
    color: [...new Set(color)].filter((el) => el !== ""),
    origin: [...new Set(origin)].filter((el) => el !== ""),
    material: [...new Set(material)].filter((el) => el !== ""),
    sexual: [...new Set(sexual)].filter((el) => el !== ""),
    size: [...new Set(size)].filter((el) => el !== "")
  }
  const response = await Product.findByIdAndUpdate(
    pid,
    {
      varriants
    },
    { new: true }
  )
  return res.status(200).json({
    success: !!response,
    mes: response ? "Added varriant." : "Cannot upload images product",
  })
})

const getNewestProducts = asyncHandler(async (req, res) => {
  const response = await Product.find({ tags: 'new' }).limit(10)
  return res.status(200).json({
    success: !!response,
    products: response ? response : "Cannot get products",
  })
})
const getSaleProduct = asyncHandler(async (req, res) => {
  const response = await Product.find({ tags: 'sale' }).limit(10)
  return res.status(200).json({
    success: !!response,
    products: response ? response : "Cannot get products",
  })
})
const getHotProducts = asyncHandler(async (req, res) => {
  const response = await Product.find({ tags: 'hot' }).limit(10)
  return res.status(200).json({
    success: !!response,
    products: response ? response : "Cannot get products",
  })
})
module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  ratings,
  uploadImagesProduct,
  addVarriant,
  getNewestProducts,
  getSaleProduct,
  getHotProducts
}
