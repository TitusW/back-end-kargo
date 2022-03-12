const ShipmentRepository = require("../../../repository/shipment");

exports.updateStatusShipmentService = async (shipmentNumber, data) => {
    const shipmentData = await ShipmentRepository.findOne('ShipmentNumber',shipmentNumber);
    if(!data.Status || shipmentData.Status == data.Status){
        throw new Error('status cannot be same');
    }
    const result = await ShipmentRepository.update(shipmentNumber, data);
    return result;
}
