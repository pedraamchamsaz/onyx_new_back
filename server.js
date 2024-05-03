const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const eventRouter = require('./routes/events')
app.use('/events', eventRouter)

app.listen(3001, () => {
    console.log('app is listening on port 3001')
})