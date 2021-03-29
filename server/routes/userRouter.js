const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

//controller
const UserController = require('../controllers/userController')
//middleware
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router