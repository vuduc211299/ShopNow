const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    image: {
        type: String
    },
    description : {
        type: String
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