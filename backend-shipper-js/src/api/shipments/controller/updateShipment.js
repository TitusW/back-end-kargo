const { updateStatusShipmentService } = require("../service/updateStatusShipment");

exports.updateShipmentStatus = async (req,res,next)=>{
    try {
        const { shipmentNumber } = req.params;
        const data ={};
        data.Status = req.body.status;
        const result = await updateStatusShipmentService(shipmentNumber, data)
        return res.status(200).json({
            message: `success update status ${data.Status} to  ${result[0]} data` ,
            data: {}
        });
    } catch (error) {
        next(error)
    }

}