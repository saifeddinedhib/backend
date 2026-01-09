const Product = require('../models/product.model')

const createProductService = async (data) => {
    const product = new Product(data);
    return await product.save();
}

const getProductByIdservice = async (id) => {
    return await Product.findById(id);
}

const getAllProductservice = async () => {
    return await Product.find({});
}

const updateProductByIdService= async(id, data)=>{
    return await Product.findByIdAndUpdate(id,data,{new:true})
}

const deleteProductByIdservice=async(id)=>{
    return await Product.findByIdAndDelete(id);
}

module.exports = {
    createProductService,
    getProductByIdservice,
    getAllProductservice,
    updateProductByIdService,
    deleteProductByIdservice
};