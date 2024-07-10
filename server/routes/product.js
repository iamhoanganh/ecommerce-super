const router = require('express').Router()
const ctrls = require('../controllers/product')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')
const uploader = require('../config/cloudinary.config')
const {uploadImageProduct} = require('../config/uploadLocal')

router.post('/', [verifyAccessToken, isAdmin], uploadImageProduct.fields([
    { name: 'images', maxCount: 10 },
    { name: 'thumb', maxCount: 1 }
]), ctrls.createProduct)
router.get('/', ctrls.getProducts)
router.get('/new', ctrls.getNewestProducts)
router.get('/hot', ctrls.getHotProducts)
router.get('/sale', ctrls.getSaleProduct)
router.put('/ratings', verifyAccessToken, ctrls.ratings)


router.put('/uploadimage/:pid', [verifyAccessToken, isAdmin], uploadImageProduct.array('images', 10), ctrls.uploadImagesProduct)
router.put('/varriant/:pid', verifyAccessToken, isAdmin, uploadImageProduct.fields([
    { name: 'images', maxCount: 10 },
    { name: 'thumb', maxCount: 1 }
]), ctrls.addVarriant)
router.put('/:pid', verifyAccessToken, isAdmin, uploadImageProduct.fields([
    { name: 'images', maxCount: 10 },
    { name: 'thumb', maxCount: 1 }
]), ctrls.updateProduct)
router.delete('/:pid', [verifyAccessToken, isAdmin], ctrls.deleteProduct)
router.get('/:pid', ctrls.getProduct)



module.exports = router