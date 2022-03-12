const { allocateShipment } = require('./controller/allocateShipment');
const { updateShipmentStatus } = require('./controller/updateShipment');
const { shipment } = require('./controller/shipment');
const { createShipment } = require('./controller/createShipment');

const router = require('express').Router();


router.post('/allocate/:shipmentNumber', allocateShipment);
router.put('/allocate/:shipmentNumber', updateShipmentStatus);
router.get('/all', shipment);
router.post('/addShipment', createShipment);

module.exports = router;