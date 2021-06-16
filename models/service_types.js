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
    admin_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "admin_id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    provider_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "provider_name"
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "image"
    },
    capacity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "capacity"
    },
    s1_enable: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s1_enable"
    },
    s2_enable: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s2_enable"
    },
    n_enable: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_enable"
    },
    s1_stime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s1_stime"
    },
    s1_etime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s1_etime"
    },
    s2_stime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s2_stime"
    },
    s2_etime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s2_etime"
    },
    d_stime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_stime"
    },
    d_etime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_etime"
    },
    n_stime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_stime"
    },
    n_etime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_etime"
    },
    s1_percent: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s1_percent"
    },
    s2_percent: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s2_percent"
    },
    d_fixed: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_fixed"
    },
    d_price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_price"
    },
    d_minute: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_minute"
    },
    d_distance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_distance"
    },
    d_waiting: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "d_waiting"
    },
    n_fixed: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_fixed"
    },
    n_price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_price"
    },
    n_minute: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_minute"
    },
    n_distance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_distance"
    },
    n_waiting: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_waiting"
    },
    calculator: {
      type: DataTypes.ENUM('MIN', 'HOUR', 'DISTANCE', 'DISTANCEMIN', 'DISTANCEHOUR'),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "calculator"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
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
    tableName: "service_types",
    comment: "",
    indexes: []
  };
  const ServiceTypesModel = sequelize.define("service_types_model", attributes, options);
  return ServiceTypesModel;
};