const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    order_number: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "order_number"
    },
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
    }
  };
  const options = {
    tableName: "customer_order",
    comment: "",
    indexes: []
  };
  const CustomerOrderModel = sequelize.define("customer_order_model", attributes, options);
  return CustomerOrderModel;
};