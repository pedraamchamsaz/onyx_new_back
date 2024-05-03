const express = require('express')
const app = express()

// app.use(cors())
app.use(express.json())

app.listen(3001, () => {
    console.log('app is listening on port 3001')
})