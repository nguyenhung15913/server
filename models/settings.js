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
    key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "key"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "value"
    }
  };
  const options = {
    tableName: "settings",
    comment: "",
    indexes: [{
      name: "settings_key_index",
      unique: false,
      type: "BTREE",
      fields: ["key"]
    }]
  };
  const SettingsModel = sequelize.define("settings_model", attributes, options);
  return SettingsModel;
};