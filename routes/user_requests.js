const express = require('express')
const router = express.Router()
const userRequestsController = require('../controllers/user_request.controller')

router.get('/index', userRequestsController.index)
router.get('/incoming-request', userRequestsController.incomingRequest)
router.post('/store', userRequestsController.store)

module.exports = router
