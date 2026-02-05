const express = require("express");
const router = express.Router();

const productRoutes = require("./product.routes");
const personRoutes = require("./person.routes");
const categoryRoutes = require("./category.routes");
const authenticationRoutes = require("./authentication.routes");
const orderRoutes = require("./order.routes");
const { isAuthenticated } = require("../middlewares/authentication.middleware");

router.use("/auth", authenticationRoutes);
router.use("/products", productRoutes);
router.use("/persons", personRoutes);
router.use("/category", categoryRoutes);
router.use("/order", isAuthenticated, orderRoutes);

module.exports = router;
