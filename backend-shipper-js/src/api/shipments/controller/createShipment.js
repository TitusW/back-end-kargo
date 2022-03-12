const { createShipmentService } = require("../service/createShipment")

exports.createShipment = async(req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const result = await createShipmentService(data);
        return res.status(200).json({
            message: `success`,
            data: result
        });
    } catch (error) {
        next(error)
    }

}