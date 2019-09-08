const express = require('express')
const auth = require('../middleware/auth')
const Product = require('../model/product')

const productRouter = new express.Router()

productRouter.get('/', async (req, res)=>{
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

productRouter.get('/product/',(req,res)=>{

})

productRouter.post('/product/create', auth, async (req,res)=>{
    try {
        const product = new Product({
            ...req.body,
            owner : req.user._id
        })
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.send(error)
    }
    
})

module.exports = productRouter
