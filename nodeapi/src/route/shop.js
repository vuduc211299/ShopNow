const express = require('express')
const auth = require('../middleware/auth')
const Shop = require('../model/shop')

const shopRouter = new express.Router()
shopRouter.post('/shop/register', auth, async (req, res) => {
    try {
        const shop = new Shop({
            ...req.body,
            owner_id: req.user._id
        })

        await shop.save()
        res.status(201).send(shop)
    } catch (error) {
        res.send(error)
    }
})

module.exports = shopRouter