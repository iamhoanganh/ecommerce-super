const router = require('express').Router()
const ctrls = require('../controllers/imageUpload')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')
const {uploadImageSlide, uploadImageProduct} = require('../config/uploadLocal')

router.post('/', [verifyAccessToken, isAdmin], uploadImageProduct.single("image"), ctrls.uploadNewImage)


module.exports = router