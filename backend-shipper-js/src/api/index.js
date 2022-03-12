const router = require('express').Router();
const shipmentController = require('./shipments/shipment-controller')

router.get('/', (_req, res) => {
    res.status(200).json({
        message: "Service Shipper OK",
        data: {}
    });
});

router.get('/all', async(req, res, next) => {
    try {
        const res = await shipmentController.getShipmentAllData();
        res.json(res);
    } catch (err) {
        next(err)
    }
});

module.exports = router;