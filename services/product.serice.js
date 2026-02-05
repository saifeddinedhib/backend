const Product = require("../models/product.model");

const createProductService = async (data) => {
  const product = new Product(data);
  return await product.save();
};

const getProductByIdService = async (id) => {
  return await Product.findById(id);
};

const getAllProductsService = async () => {
  return await Product.find({});
};

const updateProductByIdService = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProductByIdService = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProductService,
  getProductByIdService,
  getAllProductsService,
  updateProductByIdService,
  deleteProductByIdService,
};
