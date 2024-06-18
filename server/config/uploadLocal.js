const multer = require('multer')
/**
 *
 * @param {String} key
 * @returns
 */
const multerStorageProduct = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images/products`)
  },
  filename: (req, file, cb) => {
    // product-dfjolqweio-123123.jpg
    const ext = file.mimetype.split('/')[1]
    cb(null, `product-${Date.now()}.${ext}`)
  }
})
const multerStorageSlide = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images/slides`)
  },
  filename: (req, file, cb) => {
    // slide-dfjolqweio-123123.jpg
    const ext = file.mimetype.split('/')[1]
    cb(null, `slide-${Date.now()}.${ext}`)
  }
})
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) cb(null, true)
  else cb(new Error('Not an image! Please upload only images.'), false)
}
const uploadImageProduct = multer({
  storage: multerStorageProduct,
  fileFilter: multerFilter
})
const uploadImageSlide = multer({
  storage: multerStorageSlide,
  fileFilter: multerFilter
})


module.exports = {
  uploadImageProduct,
  uploadImageSlide,
}