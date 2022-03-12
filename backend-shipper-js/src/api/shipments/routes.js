const { allocateShipment } = require('./controller/allocateShipment');
const { updateShipmentStatus } = require('./controller/updateShipment');

const router = require('express').Router();


router.post('/allocate/:shipmentNumber', allocateShipment);
router.put('/allocate/:shipmentNumber', updateShipmentStatus);

module.exports = router;