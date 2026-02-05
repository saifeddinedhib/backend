const express = require("express");
const router = express.Router();
const {
  createProductController,
  getProductByIdController,
  getAllProductsController,
  updateProductsByIdController,
  deleteProductByIdController,
} = require("../controllers/product.controller");
const {
  validateCreateProduct,
  validId,
} = require("../middlewares/product.middleware");
const {
  isAuthenticated,
  isAdmin,
} = require("../middlewares/authentication.middleware");

router.post(
  "/new",
  validateCreateProduct,
  createProductController
);
router.get("/:id", validId, getProductByIdController);
router.get("/", getAllProductsController);
router.put(
  "/:id",
  validId,
  updateProductsByIdController
);
router.delete(
  "/:id",
  validId,
  deleteProductByIdController
);

module.exports = router;
