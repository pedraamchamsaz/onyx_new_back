const express = require('express')
const router = express.Router()

const events = [
    { name: "Italian Pasta Making", country: "Italy", price: 25, image: "", category: "" },
    { name: "Sushi Masterclass", country: "Japan", price: 30 },
    { name: "French Cuisine Workshop", country: "France", price: 35 },
    { name: "Mexican Cooking Fiesta", country: "Mexico", price: 20 },
    { name: "Thai Street Food Adventure", country: "Thailand", price: 25 },
    { name: "Mediterranean Flavors Experience", country: "Greece", price: 30 },
    { name: "Indian Spice Journey", country: "India", price: 25 },
    { name: "BBQ Grill & Chill", country: "United States", price: 20 },
    { name: "Vegan Delights Discovery", country: "Various", price: 30 },
    { name: "Baking Bonanza", country: "Various", price: 25 },
  ];

router.get('/', (req, res) => {
    res.json(events)
})

module.exports = router