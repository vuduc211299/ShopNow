const express = require('express')
require('./db/mongoose')

const cookieparser = require('cookie-parser')
const userRouter = require('../src/route/user')

const port = process.env.PORT || 3000 

const app = express()

app.use(cookieparser())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})