const ShipmentRepository = require('../../../repository/shipment');

exports.createShipmentService = async(data) => {
    const result = await ShipmentRepository.create(data);
    console.log(result)
    return result;
}