const express = require('express')
const Category = require('../model/category')

const categoryRouter = new express.Router()

categoryRouter.get('/category', async (req, res)=>{
    try {
        const categories = await Category.find({})
        res.send(categories)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

module.exports = categoryRouter