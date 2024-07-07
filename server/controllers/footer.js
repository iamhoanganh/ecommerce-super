const Footer = require('../models/footer')
const asyncHandler = require('express-async-handler')

const createNewFooter = asyncHandler(async (req, res) => {
    const response = await Footer.create(req.body)
    return res.json({
        success: !!response,
        createdFooter: response ? response : 'Cannot create new footer'
    })
})
const getFooter = asyncHandler(async (req, res) => {
    const response = await Footer.find()
    return res.json({
        success: !!response,
        footer: response ? response : 'Cannot get footer'
    })
})
const updateFooter = asyncHandler(async (req, res) => {
    const { bid } = req.params
    const response = await Footer.findByIdAndUpdate(bid, req.body, { new: true })
    return res.json({
        success: !!response,
        updatedFooter: response ? response : 'Cannot update footer'
    })
})

module.exports = {
    createNewFooter,
    getFooter,
    updateFooter
}