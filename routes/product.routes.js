const express = require('express');
const router = express.Router();
const { createProductController
    , getproductByIdController
    , getAllProductController,
    updateProductByIdController,
    deleteProductByIdController
 } = require('../controllers/product.controller');
const {
    validateCreateProduct,
    validId, validUpdateProduct
} = require('../midlewares/product.middleware');

const {isAuthenticated,isAdmin} = require('../midlewares/authentication.middleware')

router.get('/:id', validId, isAuthenticated,  getproductByIdController);
router.post('/new', validateCreateProduct, isAuthenticated, isAdmin, createProductController);
router.get('/', getAllProductController)
router.put('/:id', validId, validUpdateProduct, isAuthenticated,isAdmin, updateProductByIdController)
router.delete('/:id',validId, isAuthenticated,isAdmin, deleteProductByIdController)

module.exports = router;