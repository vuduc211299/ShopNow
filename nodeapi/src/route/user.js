const express = require('express')
const User = require('../model/user')
const auth = require('../middleware/auth')

const userRouter = new express.Router()

userRouter.post('/signUp', async (req,res)=>{
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

userRouter.post('/login', async (req, res) => {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    if(user){
        const token = await user.generateAuthToken()
        res.status(200).send({user, token})
    }
    res.status(404).send('email, password wrong')
})

userRouter.post('/logout', auth, async (req, res)=>{
    const user = req.user
    user.tokens.pop()
    res.send(user)
})

userRouter.get('/user/profile',auth, async (req, res)=>{
    const user = req.user
    res.status(200).send(user)
})

userRouter.patch('/user/profile/update', auth,  async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','phone']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try{
        const user = await User.findById(req.user._id)
        if(!user){
            res.status(400).send("Don't have any user with id " + _id)
        }
        updates.forEach((update) => user[update] = req.body[update])

        await user.save()

        res.status(200).send(user)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports = userRouter

