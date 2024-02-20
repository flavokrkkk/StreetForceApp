const Router = require('express')
const router = new Router()
const userController = require('../controllers/UserController')

router.post('/registartion')
router.post('/login')
router.get('/auth')

router.get('/helloWorld', userController.helloWorld)


module.exports = router
