const express = require('express')
const cors = require('cors')
require('./db/mongoose')

const userRouter = require('./route/user')
const productRouter = require('./route/product')

const port = process.env.PORT || 3000 

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})