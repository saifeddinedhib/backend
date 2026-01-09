const Category = require('../models/category.model')

const CreateCategoryService = async (data)=>{
     const category = new Category(data);
    return await category.save();
}

const getCategoryByIdservice = async (id) => {
    return await Category.findById(id);
}

const getAllCategoryservice = async () => {
    return await Category.find({});
}

const updateCategoryByIdService= async(id, data)=>{
    return await Category.findByIdAndUpdate(id,data,{new:true})
}

const deleteCategoryByIdservice=async(id)=>{
    return await Category.findByIdAndDelete(id);
}

module.exports ={
    CreateCategoryService,
    getCategoryByIdservice,
    getAllCategoryservice,
    updateCategoryByIdService,
    deleteCategoryByIdservice
}