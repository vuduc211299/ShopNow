const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    order_from : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    order_to : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        require: true
    },
    status: {
        type: String,
        require: true
    },
    order_info: [{
        product_id : {
            type: String
        },
        quantity: {
            type: Number
        }
    }]
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order