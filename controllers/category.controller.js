const {
  createCategoryService,
  getCategoryByNameService,
  getAllCategoryService,
  getCategoryByIdService,
  deleteCategoryByIdService,
  updateCategoryByIdService,
} = require("../services/category.service");

const createCategoryController = async (req, res) => {
  try {
    const data = req.body;
    const existingCategory = await getCategoryByNameService(data.name);
    if (existingCategory) {
      return res
        .status(409)
        .json({ error: "Category with this name already exists" });
    }

    const newCategory = await createCategoryService(data);
    res.status(201).json(newCategory);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to create category: ${error.message}` });
  }
};

const getAllCategoryController = async (req, res) => {
  try {
    const categories = await getAllCategoryService();
    return res.status(200).json(categories);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create category : ${error.message}` });
  }
};

const getCategoryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryByIdService(id);
    if (!category) {
      return res
        .status(204)
        .json({ message: "No category found with the given id " });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create category : ${error.message}` });
  }
};

const getCategoryByNameController = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await getCategoryByNameService(name);
    if (!category) {
      return res
        .status(204)
        .json({ message: "No category found with the given name " });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create category : ${error.message}` });
  }
};

const deleteCategoryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await deleteCategoryByIdService(id);
    if (!deleteCategory) {
      return res.status(204).json({});
    }

    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to delete category : ${error.message}` });
  }
};

const updateCategoriesByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateCategory = await updateCategoryByIdService(id, data);

    if (!updateCategory) {
      return res
        .status(204)
        .json({ error: `Failed to update category : ${error.message}` });
    }
    return res.status(200).json(updateCategory);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to update category : ${error.message}` });
  }
};

const getCategoryNameByIdController = async(req,res)=>{
  try {
    const { id } = req.params;
    const category = await getCategoryByIdService(id);
    if (!category) {
      return res
        .status(204)
        .json({ message: "No category found with the given id " });
    }
    return res.status(200).json(category.name);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create category : ${error.message}` });
  }
}

module.exports = {
  createCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  getCategoryByNameController,
  deleteCategoryByIdController,
  updateCategoriesByIdController,
  getCategoryNameByIdController
};
