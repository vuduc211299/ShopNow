const express = require('express')
const auth = require('../middleware/auth')
const Shop = require('../model/shop')

const shopRouter = new express.Router()
shopRouter.post('/shop/register', auth, async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const shop = await Shop.findOne({owner_id: req.user._id})
        if(shop) {
            updates.forEach((update) => shop[update] = req.body[update])
            await shop.save()
            res.status(200).send(shop)
        } else {
            const newShop = new Shop({
                ...req.body,
                owner_id: req.user._id
            })
    
            await newShop.save()
            res.status(201).send(newShop)
        }
    } catch (error) {
        res.send(error)
    }
})

shopRouter.get('/shop/profile', auth, async (req, res) => {
    try {
        const shop = await Shop.findOne({owner_id: req.user._id})
        if(shop) {
            res.status(200).send(shop)
        } else {
            res.status(404)
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = shopRouter