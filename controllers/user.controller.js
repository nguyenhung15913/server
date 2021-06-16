const Validator = require('fastest-validator')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const Sequelize = require('sequelize')
const UserModel = require('../models/users')
require('dotenv').config()
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
const userModel = UserModel(sequelize)

const index = (req, res) => {
	try {
		userModel
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

const signUp = (req, res) => {
	const { first_name, last_name, email, phone, password, password2 } = req.body

	if (password !== password2) {
		return res.status(400).json({
			message: 'Password and confirmed password mismatch'
		})
	}

	const schema = {
		first_name: {
			type: 'string',
			optional: false,
			min: '1',
			max: '200'
		},
		last_name: {
			type: 'string',
			optional: false,
			min: '1',
			max: '200'
		},
		email: {
			type: 'string',
			optional: false,
			min: '5',
			max: '200'
		},
		phone: {
			type: 'string',
			optional: false,
			min: '10'
		},
		password: {
			type: 'string',
			optional: false,
			max: '100',
			min: '6'
		}
	}

	let user = {
		first_name,
		last_name,
		email,
		phone,
		password
	}

	const validator = new Validator()
	const validationResponse = validator.validate(user, schema)

	if (validationResponse !== true) {
		return res.status(400).json({
			message: 'Validation failed.',
			errors: validationResponse
		})
	}

	userModel
		.findOne({ where: { email: email } })
		.then((response) => {
			if (response) {
				return res.status(409).json({
					errors: [{ message: 'Email already existed. Please use another one' }]
				})
			} else {
				bcryptjs.genSalt(10, (error, salt) => {
					if (error) {
						return res.status(500).json({
							message: 'Internal Error please try again',
							error: error
						})
					}
					bcryptjs.hash(password, salt, (e, hash) => {
						if (e) {
							return res.status(500).json({
								message: 'Internal Error please try again',
								error: e
							})
						}

						user = {
							first_name,
							last_name,
							payment_mode: 'CARD',
							device_type: 'ios',
							login_by: 'manual',
							email,
							phone,
							password: hash
						}

						userModel.create(user).then((result) => {
							res
								.status(201)
								.json({
									message: 'Signed up successfully'
								})
								.catch((err) => {
									return res.status(500).json({
										message: 'Internal Error please try again',
										error: err
									})
								})
						})
					})
				})
			}
		})
		.catch((error) => {
			console.log(error)
		})
}

const login = (req, res) => {
	const { email, password } = req.body
	let userSchema = {
		email,
		password
	}
	const schema = {
		email: {
			type: 'string',
			optional: false
		},
		password: {
			type: 'string',
			optional: false
		}
	}

	const validator = new Validator()
	const validationResponse = validator.validate(userSchema, schema)
	if (validationResponse !== true) {
		return res.status(400).json({
			message: 'Validation failed!',
			error: validationResponse
		})
	}

	userModel
		.findOne({ where: { email: email } })
		.then((user) => {
			if (!user) {
				return res.status(401).json({
					message: 'No user found'
				})
			}

			bcryptjs.compare(password, user.password, (error, result) => {
				if (result) {
					jwt.sign(
						{
							email: user.email,
							userId: user.id
						},
						process.env.JWT_KEY,
						(e, token) => {
							if (e)
								return res.status(500).json({
									message: 'error related to JWT',
									error: e
								})
							res.status(200).json({
								message: 'Logged in Successfully!',
								token: token,
								role: 'customer'
							})
						}
					)
				} else {
					return res.status(401).json({
						message: 'Wrong password try again!'
					})
				}
			})
		})
		.catch((err) => {
			return res.status(500).json({
				message: 'Internal Error. Please try again!',
				error: err
			})
		})
}

const show = (req, res) => {
	const { id } = req.params
	userModel
		.findOne({ where: { id: id } })
		.then((user) => {
			res.status(200).json({
				message: 'User Found',
				user: user
			})
		})
		.catch((err) => {
			res.status(404).json({
				message: 'User does not exist'
			})
		})
}

module.exports = {
	index,
	signUp,
	login,
	show
}
