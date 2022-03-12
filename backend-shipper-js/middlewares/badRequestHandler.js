module.exports = (req, res, next) => {
    return res.status(400).json({
        status: 'bad request!',
        message: err.message
    });
}