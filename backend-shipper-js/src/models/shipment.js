'use strict';
const {
  Model
} = require('sequelize');

let {status} = require('../constant/status');
status = Object.values(status); 

module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shipment.init({
    ShipmentNumber: DataTypes.STRING,
    LicenseNumber: DataTypes.INTEGER,
    Driver: DataTypes.STRING,
    Origin: DataTypes.STRING,
    Destination: DataTypes.STRING,
    LoadingDate: DataTypes.DATE,
    Status: DataTypes.ENUM(...status),
    Truck: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shipment',
    createdAt:"CreatedAt",
    updatedAt:"UpdatedAt"
  });
  return Shipment;
};