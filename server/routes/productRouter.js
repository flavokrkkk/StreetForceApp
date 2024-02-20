const Router = require('express')
const router = new Router()
const ProductController = require('../controllers/ProductController')

router.get('/getProductList', ProductController.getAll)
router.get('/getCurrentProduct', ProductController.getCurrentProduct)
router.post('/createProduct', ProductController.createProduct)
router.get('/deleteProduct', ProductController.deleteProduct)



module.exports = router