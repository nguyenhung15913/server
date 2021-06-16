const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    }
  };
  const options = {
    tableName: "fleet_password_resets",
    comment: "",
    indexes: [{
      name: "fleet_password_resets_email_index",
      unique: false,
      type: "BTREE",
      fields: ["email"]
    }, {
      name: "fleet_password_resets_token_index",
      unique: false,
      type: "BTREE",
      fields: ["token"]
    }]
  };
  const FleetPasswordResetsModel = sequelize.define("fleet_password_resets_model", attributes, options);
  return FleetPasswordResetsModel;
};