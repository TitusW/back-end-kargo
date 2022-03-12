const { allocateShipment } = require('./controller/allocateShipment');
const { shipment } = require('./controller/shipment');

const router = require('express').Router();


router.post('/allocate/:shipmentNumber', allocateShipment);
router.get('/all', shipment);

module.exports = router;