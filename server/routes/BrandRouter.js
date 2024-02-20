const Router = require('express')
const router = new Router()
const BrandController = require('../controllers/BrandContoller')

router.post('/addBrand', BrandController.addBrand)
router.get('/getBrand', BrandController.getAll)

module.exports = router
