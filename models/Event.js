const mongoose = require('mongoose') 

const eventSchema = new mongoose.Schema({
    name: String, 
    country: String, 
    price: Number, 
    image: String, 
    category: String
})

module.exports.Event = mongoose.model('Event', eventSchema)