const express = require('express');
const router = express.Router();
const{createCategoryController,
    getCategoryByIdController,
    getAllCategoryController,
    updateCategoryByIdController,
    deleteCategoryByIdController
}=require('../controllers/category.controller')
const{validateCreateCategory,
    validId,
    validateUpdateCategory
}=require('../midlewares/category.middleware')

router.post('/new', validateCreateCategory, createCategoryController)
router.get('/:id', validId,getCategoryByIdController)
router.get('/', getAllCategoryController)
router.put('/:id', validId, validateUpdateCategory, updateCategoryByIdController)
router.delete('/:id', validId, deleteCategoryByIdController)

module.exports = router;