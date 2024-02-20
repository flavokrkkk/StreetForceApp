const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const basketRouter = require('./basketRouter')
const likesRouter = require('./likesRouter')
const typeRouter = require('./TypeRouter')
const brandRouter = require('./BrandRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/likes', likesRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router