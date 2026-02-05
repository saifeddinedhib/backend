const {
  createProductService,
  getProductByIdService,
  getAllProductsService,
  updateProductByIdService,
  deleteProductByIdService,
} = require("../services/product.serice");
const { getCategoryByIdService } = require("../services/category.service");

const createProductController = async (req, res) => {
  try {
    const data = req.body;
    const existingCategory = await getCategoryByIdService(data.categoryId);
    if (!existingCategory) {
      return res
        .status(404)
        .json({ message: "category not found , canoot create product" });
    }
    const newProduct = await createProductService(data);
    return res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to create product : ${error.message}` });
  }
};
const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    if (!product) {
      return res
        .status(204)
        .json({ message: "No product found with the given id " });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create product : ${error.message}` });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create product : ${error.message}` });
  }
};

const updateProductsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateProduct = await updateProductByIdService(id, data);

    if (!updateProduct) {
      return res
        .status(204)
        .json({ error: `Failed to update product : ${error.message}` });
    }
    return res.status(200).json(updateProduct);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to update product : ${error.message}` });
  }
};

const deleteProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await deleteProductByIdService(id);
    if (!deleteProduct) {
      return res.status(204).json({});
    }

    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to delete product : ${error.message}` });
  }
};

module.exports = {
  createProductController,
  getProductByIdController,
  getAllProductsController,
  updateProductsByIdController,
  deleteProductByIdController,
};
