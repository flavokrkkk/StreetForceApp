const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/TypeController')

router.post('/addType', TypeController.addType)
router.get('/getType', TypeController.getType)

module.exports = router