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
    image: {
        type: String
    },
    typeOfProduct : {
        type: String,
        required: true
    },
    description : {
        type: String,
        trim: true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product
