const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    request_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "request_id"
    },
    promocode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "promocode_id"
    },
    payment_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_id"
    },
    payment_mode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_mode"
    },
    fixed: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fixed"
    },
    distance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "distance"
    },
    commision: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "commision"
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "discount"
    },
    waiting_fare: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "waiting_fare"
    },
    tip_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tip_amount"
    },
    toll: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "toll"
    },
    tax: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tax"
    },
    wallet: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "wallet"
    },
    cash: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cash"
    },
    surge: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "surge"
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated_at"
    }
  };
  const options = {
    tableName: "user_request_payments",
    comment: "",
    indexes: []
  };
  const UserRequestPaymentsModel = sequelize.define("user_request_payments_model", attributes, options);
  return UserRequestPaymentsModel;
};