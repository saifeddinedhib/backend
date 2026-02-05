const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: false,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default:
      "https://odoo-community.org/web/image/product.template/3936/image_1024?unique=9b1a3ce",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
