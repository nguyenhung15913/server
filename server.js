const express = require('express')

const app = express()

//controllers
const userRoute = require('./routes/users')
const userRequestsRoute = require('./routes/user_requests')
const customerOrderRoute = require('./routes/customer_order')

const PORT = process.env.PORT || 3000

const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
	'freedbtech_delivereh',
	'freedbtech_delivereh',
	'thePandemic1985!',
	{
		host: 'freedb.tech',
		dialect: 'mysql'
	}
)

const initialize = async () => {
	try {
		await sequelize.authenticate()
		console.log('Connection has been established successfully.')
		app.listen(PORT, () => {
			console.log('listening on port:', PORT)
		})
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

initialize()

//routes
app.use('/users', userRoute)
app.use('/user_requests', userRequestsRoute)

app.use('/order', customerOrderRoute)
