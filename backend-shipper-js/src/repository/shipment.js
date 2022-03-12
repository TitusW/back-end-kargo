const { Shipment } = require('../models');

const ShipmentRepository = {

    async findAll() {
        const result = await Shipment.findAll();
        return result;
    },

    async findOne(field, params) {
        const result = await Shipment.findOne({
            where: {
                [field]: params
            },
            raw: true
        });
        return result;
    },

    async create(data) {
        const result = await Shipment.create(data);
        return result.get({ plain: true });
    },

    async update(shipmentNumber, data) {
        const result = await Shipment.update(data, {
            where: {
                shipmentNumber: shipmentNumber
            }
        });
        return result.get({ plain: true });
    },


<<<<<<< HEAD
=======
  async update(shipmentNumber,data) {
      const result = await Shipment.update(data, {
        where: {
          ShipmentNumber : shipmentNumber
        }
      });
      return result;
  },
>>>>>>> 539189cb2e9b74faa96d4a4b878de233e4da09e9


};

module.exports = ShipmentRepository;