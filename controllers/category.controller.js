const Category = require('../models/category.model');
const {CreateCategoryService,
        getCategoryByIdservice,
        getAllCategoryservice,
        updateCategoryByIdService,
        deleteCategoryByIdservice
}= require('../services/category.service');



const createCategoryController = async (req, res) => {
    try {
        const data = req.body;
        const newCategory = await CreateCategoryService(data);
      return  res.status(201).json(newCategory);
    } catch (error) {
      return  res.status(500).json({ message: `failed to create Category:${error.message}` });
    }
};

const  getCategoryByIdController = async (req, res)=>{
    try{
        const{id}=req.params;
        const category = await getCategoryByIdservice(id);
        if(!category){
            return res.status(204).json({message:'no Category found with this'})
        }
        return res.status(200).json(category);
    }catch (error){
        return res.status(500).json({message:`failed to get Category${error.message}`})
    }
}

const getAllCategoryController=async(req,res)=>{
try{
        const Categories =await getAllCategoryservice();
        return res.status(200).json(Categories);
    }catch(error){
        return res.status(500).json({message:`failed to get Category:${error.message}`});
    }
}

const updateCategoryByIdController=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=req.body;
        const UpdateCategory=await updateCategoryByIdService(id,data);

        if(!UpdateCategory){
            return res.status(204).json({message:'no Category found with the given id to update'})
        }
        return res.status(200).json(UpdateCategory);
    }catch(error){
        return res.status(500).json({message:`failed to update Category:${error.message}`});
    }
}

const deleteCategoryByIdController=async(req,res)=>{
    try{      
          const{id}=req.params;
        await  deleteCategoryByIdservice(id);
        return res.status(200).json({message:'category is deleted'});
    }catch(error){
        return res.status(500).json({message:`failed to delete category:${error.message}`})
    }
}


module.exports={
    createCategoryController,
    getCategoryByIdController,
    getAllCategoryController,
    updateCategoryByIdController,
    deleteCategoryByIdController
}