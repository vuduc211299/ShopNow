const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./db/mongoose')

const userRouter = require('./route/user')
const productRouter = require('./route/product')
const categoryRouter = require('./route/category')
const shopRouter = require('./route/shop')
const orderRouter = require('./route/order')
const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json({ limit: '5mb' }))

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(categoryRouter)
app.use(shopRouter)
app.use(orderRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})