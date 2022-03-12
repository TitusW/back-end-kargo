const { allocateShipment } = require('./controller/allocateShipment');
const { updateShipmentStatus } = require('./controller/updateShipment');
const { shipment } = require('./controller/shipment');

const router = require('express').Router();


router.post('/allocate/:shipmentNumber', allocateShipment);
router.put('/allocate/:shipmentNumber', updateShipmentStatus);
router.get('/all', shipment);

module.exports = router;