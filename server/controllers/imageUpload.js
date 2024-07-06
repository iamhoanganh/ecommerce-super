const Image = require('../models/imageUpload')
const asyncHandler = require('express-async-handler')

const uploadNewImage = asyncHandler(async (req, res) => {
    if (!req?.file?.filename) throw new Error('Vui long gui hinh anh')
    const image = "/products/" + req?.file?.filename
    const response = await Image.create({image})
    const serverUrl = `${req.protocol}://${req.get('host')}`
    response.image = serverUrl + response.image
    return res.json({
        success: !!response,
        image: response ? response : 'Them hinh anh that bai'
    })
})

module.exports = {
    uploadNewImage,
}