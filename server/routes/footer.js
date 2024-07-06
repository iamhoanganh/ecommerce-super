const router = require('express').Router()
const ctrls = require('../controllers/footer')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

// router.post('/', [verifyAccessToken, isAdmin], ctrls.createNewFooter)
router.get('/', ctrls.getFooter)
router.put('/:bid', [verifyAccessToken, isAdmin], ctrls.updateFooter)

module.exports = router