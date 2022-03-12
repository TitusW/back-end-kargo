module.exports = (req, res, next) => {
    return res.status(500).json({
        status: "oops, something went wrong."
    });
}