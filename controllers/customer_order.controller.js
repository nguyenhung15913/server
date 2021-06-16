/*
1. customer enter information and submit the form
2. information goes to customer_order
*/

const Sequelize = require('sequelize')
const CustomerOrderModel = require('../models/customer_order')
const sequelize = new Sequelize(
	'freedbtech_delivereh',
	'freedbtech_delivereh',
	'thePandemic1985!',
	{
		host: 'freedb.tech',
		dialect: 'mysql'
	}
)
const customerOrderModel = CustomerOrderModel(sequelize)

const store = (req, res) => {
	const {
		order_number,
		customer_name,
		customer_phone,
		customer_address,
		receiver_name,
		receiver_phone,
		receiver_address,
		instruction
	} = req.body

	let orderInformation = {
		order_number,
		customer_name,
		customer_phone,
		customer_address,
		receiver_name,
		receiver_phone,
		receiver_address,
		instruction
	}

	console.log(orderInformation)

	customerOrderModel
		.create(orderInformation)
		.then((result) => {
			res.status(201).json({
				message: 'order created successfully!!!',
				result: result
			})
		})
		.catch((error) => {
			res.status(500).json({
				message: 'something went wrong!',
				error: error
			})
		})
}

module.exports = {
	store
}
