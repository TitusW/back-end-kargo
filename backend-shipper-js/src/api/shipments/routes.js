const { allocateShipment } = require('./controller/allocateShipment');

const router = require('express').Router();


router.post('/allocate/:shipmentNumber', allocateShipment);

module.exports = router;