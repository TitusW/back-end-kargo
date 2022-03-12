const { status } = require("../../../constant/status");
const ShipmentRepository = require("../../../repository/shipment");

exports.allocateShipmentService = async (shipmentNumber, data) => {
    // const [driverData, truckData] = await Promise.all([
        
    // ])
    const dummy = {};
    dummy.Driver = "cahya";
    dummy.LicenseNumber = 10330180832;
    dummy.Status = status[1];
    const shipmentData = await ShipmentRepository.findOne('ShipmentNumber',shipmentNumber);
    if(!shipmentData) throw new Error('not found');
    else if(shipmentData.Status === status[1]) throw new Error('shipment alerady allocated');
    const result = await ShipmentRepository.update(shipmentNumber, dummy);
    return result;
}
