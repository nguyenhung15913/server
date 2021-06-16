const Sequelize = require('sequelize')
const UserRequestsModel = require('../models/user_requests')
// const sequelize = new Sequelize('delivereh', 'root', 'G4puhn36&dy5CtTn*-hf', {
// 	host: '169.59.64.164',
// 	dialect: 'mysql',
// 	define: {
// 		timestamps: false
// 	}
// })

const sequelize = new Sequelize(
	'freedbtech_delivereh',
	'freedbtech_delivereh',
	'thePandemic1985!',
	{
		host: 'freedb.tech',
		dialect: 'mysql',
		define: {
			timestamps: false
		}
	}
)

const userRequestsModel = UserRequestsModel(sequelize)

const index = (req, res) => {
	try {
		userRequestsModel
			.findAll()
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				res.status(500).json(err)
			})
	} catch (err) {
		console.log(err)
	}
}

const store = (req, res) => {
	const {
		booking_id,
		user_id,
		distance,
		s_address,
		s_latitude,
		s_longitude,
		d_address,
		d_latitude,
		d_longitude,
		route_key,
		created_at,
		updated_at
	} = req.body
	try {
		const request = {
			booking_id,
			user_id,
			userName: 'blah blah',
			provider_id: 1,
			corporate_id: 0,
			group_id: 0,
			fleet_id: 0,
			hotel_id: 0,
			current_provider_id: 1,
			service_type_id: 1,
			status: 'SEARCHING',
			push: null,
			cancelled_by: 'NONE',
			cancel_reason: null,
			booking_by: 'WEB',
			payment_mode: 'CARD',
			paid: 1,
			distance,
			s_address,
			s_latitude,
			s_longitude,
			d_address,
			d_latitude,
			d_longitude,
			driver_message: '',
			assigned_at: null,
			schedule_at: null,
			started_at: null,
			finished_at: null,
			waiting_time: '00:00:03',
			tip_percent: 0,
			user_rated: 1,
			provider_rated: 1,
			use_wallet: 0,
			surge: 0,
			route_key,
			deleted_at: null,
			created_at,
			updated_at
		}
		userRequestsModel
			.create(request)
			.then((result) => {
				res.status(200).json({
					message: 'request added successfully',
					result: result
				})
			})
			.catch((err) => {
				res.status(500).json({
					message: 'something went wrong',
					error: err
				})
			})
	} catch (err) {
		console.log(err)
	}
}

const incomingRequest = (req, res) => {
	userRequestsModel
		.findAll({ where: { status: 'SEARCHING' } })
		.then((result) => {
			res.status(200).json({
				result: result
			})
		})
		.catch((err) => {
			res.status(500).json({
				message: 'something went wrong',
				error: err
			})
		})
}

module.exports = {
	index,
	store,
	incomingRequest
}
