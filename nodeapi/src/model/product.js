const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    quantity : {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discount: {
        type: String
    },
    image: {
        type: String
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description : {
        type: String
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    owner_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product
