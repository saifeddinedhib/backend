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


router.get('/:id', validId, getproductByIdController);
router.post('/new', validateCreateProduct, createProductController);
router.get('/', getAllProductController)
router.put('/:id', validId, validUpdateProduct, updateProductByIdController)
router.delete('/:id',validId,deleteProductByIdController)



module.exports = router;