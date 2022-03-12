const { getShipmentAll } = require("../service/shipment")

exports.shipment = async(req, res, next) => {
    try {
        const result = await getShipmentAll();
        console.log(result);
        return res.status(200).json({
            message: `success`,
            data: result

        });
    } catch (error) {
        next(error)
    }
}