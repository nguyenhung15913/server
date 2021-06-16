const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/index', userController.index)
router.post('/sign-up', userController.signUp)
router.post('/login', userController.login)
router.get('/show/:id', userController.show)

module.exports = router
