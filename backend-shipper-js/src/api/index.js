const router = require('express').Router();
const shipmentRouter = require('./shipments/routes');


router.get('/', (_req, res) => {
    res.status(200).json({
        message: "Service Shipper OK",
        data: {}
    });
});


router.use('/shipments', shipmentRouter);


module.exports = router;