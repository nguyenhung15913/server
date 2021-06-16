// const sequelize = require('sequelize')
// var initModels = require('../models/init-models')
// var models = initModels(sequelize)
// const Validator = require('fastest-validator')
// const bcryptjs = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// require('dotenv').config()

// const signUp = (req, res) => {
// 	const {
// 		name,
// 		email,
// 		phone,
// 		password,
// 		password2,
// 		street,
// 		city,
// 		region,
// 		postal
// 	} = req.body

// 	if (password !== password2) {
// 		return res.json({
// 			message: 'Password and confirmed password mismatch'
// 		})
// 	}

// 	const schema = {
// 		name: {
// 			type: 'string',
// 			optional: false,
// 			min: '5',
// 			max: '200'
// 		},
// 		email: {
// 			type: 'string',
// 			optional: false,
// 			min: '5',
// 			max: '200'
// 		},
// 		phone: {
// 			type: 'string',
// 			optional: false,
// 			min: '10'
// 		},
// 		password: {
// 			type: 'string',
// 			optional: false,
// 			max: '20',
// 			min: '12'
// 		}
// 	}

// 	let user = {
// 		name,
// 		email,
// 		phone,
// 		password
// 	}

// 	const validator = new Validator()
// 	const validationResponse = validator.validate(user, schema)

// 	if (validationResponse !== true) {
// 		return res.status(400).json({
// 			message: 'Validation failed.',
// 			errors: validationResponse
// 		})
// 	}

// 	models.Customers.findOne({ where: { email: email } })
// 		.then((response) => {
// 			if (response) {
// 				return res.status(409).json({
// 					errors: [{ message: 'Email already existed. Please use another one' }]
// 				})
// 			} else {
// 				bcryptjs.genSalt(10, (error, salt) => {
// 					if (error) {
// 						return res.status(500).json({
// 							message: 'Internal Error please try again',
// 							error: error
// 						})
// 					}
// 					bcryptjs.hash(password, salt, (e, hash) => {
// 						if (e) {
// 							return res.status(500).json({
// 								message: 'Internal Error please try again',
// 								error: e
// 							})
// 						}

// 						user = {
// 							name,
// 							email,
// 							phone,
// 							street,
// 							city,
// 							region,
// 							postal,
// 							password: hash,
// 							role: 'customer'
// 						}

// 						models.Customers.create(user).then((result) => {
// 							res
// 								.status(201)
// 								.json({
// 									message: 'Signed up successfully'
// 								})
// 								.catch((err) => {
// 									return res.status(500).json({
// 										message: 'Internal Error please try again',
// 										error: err
// 									})
// 								})
// 						})
// 					})
// 				})
// 			}
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// }

// const login = (req, res) => {
// 	const { email, password } = req.body
// 	let userSchema = {
// 		email,
// 		password
// 	}
// 	const schema = {
// 		email: {
// 			type: 'string',
// 			optional: false
// 		},
// 		password: {
// 			type: 'string',
// 			optional: false
// 		}
// 	}

// 	const validator = new Validator()
// 	const validationResponse = validator.validate(userSchema, schema)
// 	if (validationResponse !== true) {
// 		return res.status(400).json({
// 			message: 'Validation failed!',
// 			error: validationResponse
// 		})
// 	}

// 	models.Customers.findOne({ where: { email: email } })
// 		.then((user) => {
// 			if (!user) {
// 				return res.status(401).json({
// 					message: 'No user found'
// 				})
// 			}

// 			bcryptjs.compare(password, user.password, (error, result) => {
// 				if (result) {
// 					jwt.sign(
// 						{
// 							email: user.email,
// 							userId: user.id
// 						},
// 						process.env.JWT_KEY,
// 						(e, token) => {
// 							res.status(200).json({
// 								message: 'Logged in Successfully!',
// 								token: token,
// 								role: user.role
// 							})
// 						}
// 					)
// 				} else {
// 					return res.status(401).json({
// 						message: 'Wrong password try again!'
// 					})
// 				}
// 			})
// 		})
// 		.catch((err) => {
// 			return res.status(500).json({
// 				message: 'Internal Error. Please try again!',
// 				error: err
// 			})
// 		})
// }

// module.exports = {
// 	signUp,
// 	login
// }
