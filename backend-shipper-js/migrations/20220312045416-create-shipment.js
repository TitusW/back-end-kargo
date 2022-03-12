'use strict';

let {status} = require('../src/constant/status');
status = Object.values(status);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ShipmentNumber: {
        type: Sequelize.STRING,
        unique: true
      },
      LicenseNumber: {
        type: Sequelize.BIGINT
      },
      Driver: {
        type: Sequelize.STRING
      },
      Origin: {
        type: Sequelize.STRING
      },
      Destination: {
        type: Sequelize.STRING
      },
      LoadingDate: {
        type: Sequelize.DATE
      },
      Status: {
        type: Sequelize.ENUM(...status)
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shipments');
  }
};