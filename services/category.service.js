const Category = require("../models/category.model");

const getCategoryByNameService = async (name) => {
  return await Category.findOne({ name });
};

const createCategoryService = async (data) => {
  const category = new Category(data);
  return await category.save();
};

const getAllCategoryService = async () => {
  return await Category.find({});
};

const getCategoryByIdService = async (id) => {
  return await Category.findById(id);
};

const deleteCategoryByIdService = async (id) => {
  return await Category.findByIdAndDelete(id);
};

const updateCategoryByIdService = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
}; 


module.exports = {
  createCategoryService,
  getCategoryByNameService,
  getAllCategoryService,
  getCategoryByIdService,
  deleteCategoryByIdService,
  updateCategoryByIdService,
};
