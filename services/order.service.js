const Order = require('../models/order.model');

const createOrderService = async (data) => {
    const order = new Order(data);
    return await order.save();
};

const getAllOrderService = async () => {
    return await Order.find({});
};

const getOrderByIdService = async (id) => {
    return await Order.findById(id);
};

const updateOrderByIdService= async(id, data)=>{
    return await Order.findByIdAndUpdate(id,data,{new:true})
}

const deleteOrderByIdService=async(id)=>{
    return await Order.findByIdAndDelete(id);
}

module.exports = {
    createOrderService,
    getAllOrderService,
    getOrderByIdService,
    deleteOrderByIdService,
    updateOrderByIdService
};