const axios  = require("axios");
const { status } = require("../../../constant/status");
const ShipmentRepository = require("../../../repository/shipment");

exports.allocateShipmentService = async (shipmentNumber, truckId, driverId) => {
    const data = {};
    const [driverData, truckData] = await Promise.all([
        axios.default.get(`http://3494-180-244-136-209.ngrok.io/drivers/${driverId}`),
        axios.default.get(`http://3494-180-244-136-209.ngrok.io/truck/${truckId}`)
    ])
    data.Driver = driverData.Name;
    data.LicenseNumber = truckData.licenseNumber;
    data.Status = status[1];
    const shipmentData = await ShipmentRepository.findOne('ShipmentNumber',shipmentNumber);
    if(!shipmentData) throw new Error('not found');
    else if(shipmentData.Status === status[1]) throw new Error('shipment alerady allocated');
    const result = await ShipmentRepository.update(shipmentNumber, dummy);
    return result;
}
