const express = require("express");
const router = express.Router();

const {
  createCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  getCategoryByNameController,
  deleteCategoryByIdController,
  updateCategoriesByIdController,
  getCategoryNameByIdController
} = require("../controllers/category.controller");
const {
  validateCreateCategory,
  validId,
  validName,
} = require("../middlewares/category.middleware");
const {
  isAuthenticated,
  isAdmin,
} = require("../middlewares/authentication.middleware");

router.get("/", getAllCategoryController);
router.post("/new", validateCreateCategory, createCategoryController);
router.get("/:id", validId, getCategoryByIdController);

router.get('/name/:id', validId, getCategoryNameByIdController)

router.get(
  "/categoryName/:name",
  validName,
  getCategoryByNameController
);

router.delete(
  "/:id",
  validId,
  deleteCategoryByIdController
);

router.put('/:id', updateCategoriesByIdController)

module.exports = router;
