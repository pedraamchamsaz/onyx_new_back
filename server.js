const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_STRING) 

app.use(cors())
app.use(express.json())

const eventRouter = require('./routes/events')
app.use('/events', eventRouter)

app.listen(3001, () => {
    console.log('app is listening on port 3001')
})