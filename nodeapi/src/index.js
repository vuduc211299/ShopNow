const express = require('express')
require('./db/mongoose')

const cookieparser = require('cookie-parser')
const userRouter = require('./route/user')
const productRouter = require('./route/product')

const port = process.env.PORT || 3000 

const app = express()

app.use(cookieparser())
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})