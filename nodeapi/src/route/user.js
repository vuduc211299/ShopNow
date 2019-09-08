const express = require('express')
const User = require('../model/user')
const auth = require('../middleware/auth')

const userRouter = new express.Router()

userRouter.post('/signUp', async (req,res)=>{
    const user = new User(req.body)
    try {
        
        await user.save()
        const token = await user.generateAuthToken()
        res.cookie('jwt',token, {expire : Date.now() + 31536000000})
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

userRouter.post('/login', async (req, res) => {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    if(user){
        const token = await user.generateAuthToken()
        res.cookie('jwt',token,{expire : Date.now() + 31536000000})
        res.status(200).send({user, token})
    }
    res.status(404).send()
})

userRouter.post('/logout', auth, async (req, res)=>{
    const user = req.user
    user.tokens.pop()
    res.clearCookie('jwt')
    res.send(user)
})

userRouter.get('/user/profile',auth, async (req, res)=>{
    const user = req.user
    res.status(200).send(user)
})





module.exports = userRouter

