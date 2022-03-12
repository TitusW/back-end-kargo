const shipmentRepository = require('../../../repository/shipment');

function getShipmentAll() {
    const datas = shipmentRepository.findAll();
    return datas;
}

module.exports = { getShipmentAll };