const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: "https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;