const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    description : {
        type: String
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    owner_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
        unique : true
    }
})

const Shop = mongoose.model('Shop',shopSchema)

module.exports = Shop