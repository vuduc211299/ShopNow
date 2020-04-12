const express = require('express')
const auth = require('../middleware/auth')
const Shop = require('../model/shop')
const Order = require('../model/order')
const orderRouter = new express.Router()


// get order all
orderRouter.get('/shop/order', auth , async (req, res)=>{
    try {
        const shop_id = (await Shop.findOne({owner_id: req.user._id}))._id
        if(shop_id) {
            await Order.find({order_to: shop_id})
            .populate('product_id', 'name image')
            .populate('order_from', 'name phone address')
            .exec((err, order) => {
                if(err) {
                    console.log(err)
                } else {
                    res.status(200).send(order)
                }
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
    
})

orderRouter.post('/order/create', auth, async (req, res)=>{
    try {
        const order = new Order({
            order_date: new Date(),
            ...req.body
        })
        await order.save()
        res.status(201).send(order)
    } catch (error) {
        res.send(error)
    }
})

orderRouter.delete('/order/delete', auth, async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.body._id)
        res.status(200).send(order)
    } catch (error) {
        res.send(error)
    }
})

module.exports = orderRouter
