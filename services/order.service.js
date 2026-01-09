const Order = require('../models/order.model');

const createOrderService = async (data) => {
    const order = new Order(data);
    return await order.save();
};

const getAllOrderservice = async () => {
    return await Order.find({});
};

const getOrderByIdservice = async (id) => {
    return await Order.findById(id);
};

const updateOrderByIdService= async(id, data)=>{
    return await Order.findByIdAndUpdate(id,data,{new:true})
}


const deleteOrderByIdservice=async(id)=>{
    return await Order.findByIdAndDelete(id);
}






module.exports = {
    createOrderService,
    getAllOrderservice,
    getOrderByIdservice,
    deleteOrderByIdservice,
    updateOrderByIdService
};