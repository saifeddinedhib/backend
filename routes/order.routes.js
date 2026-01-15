const express = require('express');
const router = express.Router();
const { 
    createOrderController,
    getAllOrderController,
    getOrderByIdController,
    updateOrderByIdController,
    deleteOrderByIdController
     } = require('../controllers/order.controller');
const { 
    validateCreateOrder,
    validId,
    validUpdateOrder
 } = require('../midlewares/order.middleware');
 
 const {isAdmin}=require('../midlewares/authentication.middleware')

router.post('/new',validateCreateOrder  , createOrderController);
router.get('/', getAllOrderController);
router.get('/:id', validId, isAdmin, getOrderByIdController)
router.delete('/:id', validId,isAdmin, deleteOrderByIdController)
router.put('/:id', validId, validUpdateOrder, isAdmin, updateOrderByIdController)

module.exports = router;