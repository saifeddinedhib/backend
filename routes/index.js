const express = require('express');
const router = express.Router();
const productRoutes = require('./product.routes')
const personRoutes = require('./person.routes')
const categoryRoutes= require('./category.routes')
const orderRoutes = require('./order.routes')
const authenticationRoutes= require('./authentication.router')


router.use('/auth', authenticationRoutes)
router.use('/product', productRoutes)
router.use('/persons', personRoutes)
router.use('/category',categoryRoutes)
router.use('/order', orderRoutes)

module.exports=router;

