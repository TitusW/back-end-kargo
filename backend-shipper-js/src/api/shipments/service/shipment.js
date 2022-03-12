const shipmentRepository = require('../../../repository/shipment');

exports.getShipmentAll = async() => {
    const result = await shipmentRepository.findAll();
    return result;
}