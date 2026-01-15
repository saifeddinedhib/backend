const express = require('express');
const router = express.Router();
const productRoutes = require('./product.routes')
const personRoutes = require('./person.routes')
const categoryRoutes= require('./category.routes')
const orderRoutes = require('./order.routes')
const authenticationRoutes= require('./authentication.router')
const {isAuthenticated} = require('../midlewares/authentication.middleware')


router.use('/auth', authenticationRoutes)
router.use('/product', productRoutes)
router.use('/persons', isAuthenticated, personRoutes)
router.use('/category', isAuthenticated, categoryRoutes)
router.use('/order', isAuthenticated, orderRoutes)

module.exports=router;

