const mongoose = require("mongoose");

const validateCreateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "Missing required name category field " });
  }
  next();
};

const validId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  next();
};

const validName = (req, res, next) => {
  const { name } = req.params;
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "Missing required name category field " });
  }
  next();
};

module.exports = {
  validateCreateCategory,
  validId,
  validName,
};
