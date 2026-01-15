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

const {isAuthenticated,isAdmin}= require('../midlewares/authentication.middleware')


router.post('/new', validateCreateCategory, isAuthenticated, isAdmin,  createCategoryController)
router.get('/:id', validId, isAuthenticated, isAdmin, getCategoryByIdController)
router.get('/', isAuthenticated, isAdmin, getAllCategoryController)
router.put('/:id', validId, validateUpdateCategory,isAdmin,  updateCategoryByIdController)
router.delete('/:id', validId,isAdmin, deleteCategoryByIdController)

module.exports = router;