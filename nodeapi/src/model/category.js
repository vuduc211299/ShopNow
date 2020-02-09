const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true
    }
})

const Category = mongoose.model('Category',categorySchema)

module.exports = Category