const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: null,
			primaryKey: true,
			autoIncrement: true,
			comment: null,
			field: 'id'
		},
		booking_id: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'booking_id'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'user_id'
		},
		userName: {
			type: DataTypes.STRING(250),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'userName'
		},
		provider_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'provider_id'
		},
		corporate_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'corporate_id'
		},
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'group_id'
		},
		fleet_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'fleet_id'
		},
		hotel_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'hotel_id'
		},
		current_provider_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'current_provider_id'
		},
		service_type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'service_type_id'
		},
		status: {
			type: DataTypes.ENUM(
				'SEARCHING',
				'CANCELLED',
				'ACCEPTED',
				'STARTED',
				'ARRIVED',
				'PICKEDUP',
				'DROPPED',
				'COMPLETED',
				'SCHEDULED',
				'END'
			),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'status'
		},
		push: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'push'
		},
		cancelled_by: {
			type: DataTypes.ENUM(
				'NONE',
				'USER',
				'PROVIDER',
				'DISPATCHER',
				'REJECTED',
				'NODRIVER'
			),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'cancelled_by'
		},
		cancel_reason: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'cancel_reason'
		},
		booking_by: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'booking_by'
		},
		payment_mode: {
			type: DataTypes.ENUM('CASH', 'CARD', 'PAYPAL', 'CORPORATE', 'WALLET'),
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'payment_mode'
		},
		paid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'paid'
		},
		distance: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'distance'
		},
		s_address: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 's_address'
		},
		s_latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 's_latitude'
		},
		s_longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 's_longitude'
		},
		d_address: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'd_address'
		},
		d_latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'd_latitude'
		},
		d_longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'd_longitude'
		},
		driver_message: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'driver_message'
		},
		assigned_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'assigned_at'
		},
		schedule_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'schedule_at'
		},
		started_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'started_at'
		},
		finished_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'finished_at'
		},
		waiting_time: {
			type: DataTypes.TIME,
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'waiting_time'
		},
		tip_percent: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0.00',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'tip_percent'
		},
		user_rated: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'user_rated'
		},
		provider_rated: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'provider_rated'
		},
		use_wallet: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'use_wallet'
		},
		surge: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'surge'
		},
		route_key: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'route_key'
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'deleted_at'
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'created_at'
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
			primaryKey: false,
			autoIncrement: false,
			comment: null,
			field: 'updated_at'
		}
	}
	const options = {
		tableName: 'user_requests',
		comment: '',
		indexes: []
	}
	const UserRequestsModel = sequelize.define(
		'user_requests_model',
		attributes,
		options
	)
	return UserRequestsModel
}
