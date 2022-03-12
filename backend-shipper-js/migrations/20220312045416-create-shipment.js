'use strict';

let {status} = require('../constant/status');
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
        type: Sequelize.STRING
      },
      LicenseNumber: {
        type: Sequelize.INTEGER
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
      Truck: {
        type: Sequelize.STRING
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