const mongoose = require('mongoose') 

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    userId: String,
    // time: String,
    category: String,
    country: String, 
    image: String, 
    price: Number, 
    overview: String,
    onTheDay: String,
    refund: String,
    guidelines: String,
    createdBy: String
})

module.exports.Event = mongoose.model('Event', eventSchema)