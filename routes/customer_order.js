const express = require('express')
const router = express.Router()
const customerOrderController = require('../controllers/customer_order.controller')

router.post('/store', customerOrderController.store)

module.exports = router
