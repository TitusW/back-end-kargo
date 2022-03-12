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




};

module.exports = ShipmentRepository;