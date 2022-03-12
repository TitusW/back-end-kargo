module.exports = (_req, res) => {
  res.status(404).json({
      message: "not found!",
      data: {}
  })
};
