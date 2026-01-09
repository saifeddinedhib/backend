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



router.post('/new',validateCreateOrder  , createOrderController);
router.get('/', getAllOrderController);
router.get('/:id', validId, getOrderByIdController)
router.delete('/:id', validId, deleteOrderByIdController)
router.put('/:id', validId, validUpdateOrder, updateOrderByIdController)










module.exports = router;