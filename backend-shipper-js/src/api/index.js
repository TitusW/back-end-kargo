const router = require('express').Router();

router.get('/', (_req,res)=>{
    res.status(200).json({
        message: "Service Shipper OK",
        data: {}
    });
});

module.exports = router;