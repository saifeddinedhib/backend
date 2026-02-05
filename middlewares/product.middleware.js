const mongoose = require("mongoose");

const validateCreateProduct = (req, res, next) => {
  const { name, price, stock, categoryId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    console.log("categoryId", categoryId);
    return res.status(400).json({ error: "Invalid category format" });
  }

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Missing required product fields " });
  }
  if (!price || typeof price !== "number" || price < 0) {
    return res
      .status(400)
      .json({ error: "Invalid price field:must be a number above 0" });
  }
  if (!stock || typeof stock !== "number" || stock < 0) {
    return res
      .status(400)
      .json({ error: "Invalid stock field:must be a positive number" });
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

const validateUpdateProduct = (req, res, next) => {
  const { name, price, stock, description } = req.body;
  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res
        .status(400)
        .json({ error: "Invalid name field: must be a non-empty string" });
    }
  }

  if (price !== undefined) {
    if (typeof price !== "number" || price < 0) {
      return res
        .status(400)
        .json({ error: "Invalid price field: must be a non-empty number" });
    }
  }

  if (stock !== undefined) {
    if (typeof stock !== "number" || stock < 0) {
      return res
        .status(400)
        .json({ error: "Invalid stock field: must be a non-empty number" });
    }
  }

  if (description !== undefined) {
    if (typeof description !== "string") {
      return res
        .status(400)
        .json({
          error: "Invalid description field: must be a non-empty string",
        });
    }
  }

  if (
    name === undefined &&
    desription === undefined &&
    price === undefined &&
    stock === undefined
  ) {
    return res
      .status(400)
      .json({ error: " At Least one of fields must be provided " });
  }

  next();
};

module.exports = {
  validateCreateProduct,
  validId,
  validateUpdateProduct,
};
