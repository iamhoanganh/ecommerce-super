const router = require('express').Router()
const ctrls = require('../controllers/slide')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')
const {uploadImageSlide} = require('../config/uploadLocal')

router.post('/', [verifyAccessToken, isAdmin], uploadImageSlide.single("image"), ctrls.createNewSlide)
router.get('/', ctrls.getSlides)
router.put('/:bid', [verifyAccessToken, isAdmin], ctrls.updateSlide)
router.delete('/:bid', [verifyAccessToken, isAdmin], ctrls.deleteSlide)


module.exports = router