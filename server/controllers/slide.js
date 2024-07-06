const Slide = require('../models/slide')
const asyncHandler = require('express-async-handler')

const createNewSlide = asyncHandler(async (req, res) => {
  if (!req?.file?.filename) throw new Error('Vui long gui hinh anh')
  const image = "/slides/" + req?.file?.filename
  const allSlides = await Slide.find()
  if (allSlides.length >= process.env.LIMIT_SLIDES) throw new Error('So luong slide toi da la 5')
  const response = await Slide.create({image})
  const serverUrl = `${req.protocol}://${req.get('host')}`
  response.image = serverUrl + response.image
  return res.json({
    success: !!response,
    createdSlide: response ? response : 'Them moi slide thanh cong'
  })
})
const getSlides = asyncHandler(async (req, res) => {
  const response = await Slide.find()
  const serverUrl = `${req.protocol}://${req.get('host')}`
  response.map(slide => slide.image = serverUrl + slide.image)
  return res.json({
    success: !!response,
    slides: response ? response : 'Khong the lay danh sach slide'
  })
})
const updateSlide = asyncHandler(async (req, res) => {
  const { bid } = req.params
  const response = await Slide.findByIdAndUpdate(bid, req.body, { new: true })
  return res.json({
    success: !!response,
    updatedSlide: response ? response : 'Khong the cap nhat slide'
  })
})
const deleteSlide = asyncHandler(async (req, res) => {
  const { bid } = req.params
  const response = await Slide.findByIdAndDelete(bid)
  return res.json({
    success: !!response,
    deletedSlide: response ? response : 'Khong the xoa slide'
  })
})

module.exports = {
  createNewSlide,
  getSlides,
  updateSlide,
  deleteSlide
}