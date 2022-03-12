// const errorHandler = require("../../../../middlewares/errorHandler");
const ShipmentService = require("./service/shipment");

const getShipmentAllData = async(req, res) => {
    const shipmentAllData = ShipmentService.getShipmentAll();
    return res.json(shipmentAllData);
}

module.exports = { getShipmentAllData };