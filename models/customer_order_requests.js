const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    customer_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "customer_name"
    },
    customer_phone: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "customer_phone"
    },
    customer_address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "customer_address"
    },
    receiver_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "receiver_name"
    },
    receiver_phone: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "receiver_phone"
    },
    receiver_address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "receiver_address"
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "instruction"
    },
    order_number: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "order_number"
    }
  };
  const options = {
    tableName: "customer_order_requests",
    comment: "",
    indexes: []
  };
  const CustomerOrderRequestsModel = sequelize.define("customer_order_requests_model", attributes, options);
  return CustomerOrderRequestsModel;
};