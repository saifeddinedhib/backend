const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    },
    products: {
        type: [{
            product: {
                type:
                    mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                default:1,
                min: [1, 'Quantity must be at least 1']
            }
        }]
    },
    total:{
        type:Number,
        required:true,
        min: [0, 'total must be over 0']
    },
    status:{
        type:String,
        enum:['DELIVERED','PENDING','CANCELED'],
        default:'PENDING'
    }
})
const Order = mongoose.model('Order', orderSchema)

module.exports = Order;