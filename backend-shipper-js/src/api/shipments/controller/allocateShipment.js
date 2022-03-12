const { allocateShipmentService } = require("../service/allocateShipment")

exports.allocateShipment = async (req,res,next)=>{
    try {
        const { shipmentNumber } = req.params;
        const data = req.body;
        const result = await allocateShipmentService(shipmentNumber, data)
        return res.status(200).json({
            message: `success allocate ${result[0]} data` ,
            data: {}
        });
    } catch (error) {
        next(error)
    }

}