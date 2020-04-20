const express = require('express')
const auth = require('../middleware/auth')
const Product = require('../model/product')
const Shop = require('../model/shop')
const productRouter = new express.Router()

productRouter.get('/product/', async (req, res)=>{
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

// get product by id

productRouter.get('/product/:id', async (req, res) => {
    try {
        await Product.findOne({_id: req.params.id})
        .populate('owner_id','name phone address image')
        .exec((err, product) => {
            if(product) {
                res.status(200).send(product)
            } else {
                res.status(404)
            }
        })
    } catch (error) {
        res.send(error)
    }
})

// get product by shop

productRouter.get('/shop/product/', auth, async (req, res) => {
    try {
        const shop = await Shop.findOne({owner_id: req.user._id})
        if(shop) {
            const products = await Product.find({owner_id: shop._id})
            res.status(200).send(products)
        } else{
            res.status(404).send('Dont have any shop yet')
        }
    } catch (error) {
        res.send(error)
    }
})

productRouter.post('/product/create', auth, async (req,res)=>{
    try {
        const shop = await Shop.findOne({owner_id: req.user._id})
        const product = new Product({
            ...req.body,
            owner_id : shop._id
        })
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.send(error)
    }
    
})

// delete product by id

productRouter.delete('/product/delete', auth, async (req, res) => {
    const _id = req.body.id
    try {
        const product = await Product.findByIdAndDelete({_id})
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(404)
        }
    } catch (error) {
        res.send(error)
    }
})

// update product by id

productRouter.patch('/product/update', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['id','name','quantity','discount', 'price', 'description']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const _id = req.body.id
        const product = await Product.findById({_id})
        if(product) {
            updates.forEach((update) => product[update] = req.body[update])
            await product.save()
            res.status(200).send(product)
        } else {
            res.status(404)
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = productRouter
