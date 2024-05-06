const express = require('express')
const router = express.Router()
const { getEvents, createEvent } = require('../controllers/eventController');

const events = [
    // Cooking Classes
    { name: "Italian Pasta Making", country: "Italy", price: 25, image: "url_to_image", category: "Cooking Classes" },
    { name: "Sushi Masterclass", country: "Japan", price: 30, image: "url_to_image", category: "Cooking Classes" },
    { name: "French Cuisine Workshop", country: "France", price: 35, image: "url_to_image", category: "Cooking Classes" },
    { name: "Mexican Cooking Fiesta", country: "Mexico", price: 20, image: "url_to_image", category: "Cooking Classes" },
    { name: "Thai Street Food Adventure", country: "Thailand", price: 25, image: "url_to_image", category: "Cooking Classes" },
    // Yoga & Meditation
    { name: "Sunrise Yoga by the Beach", country: "United States", price: 20, image: "url_to_image", category: "Yoga & Meditation" },
    { name: "Zen Meditation Retreat", country: "Japan", price: 40, image: "url_to_image", category: "Yoga & Meditation" },
    { name: "Hatha Yoga Fusion", country: "India", price: 25, image: "url_to_image", category: "Yoga & Meditation" },
    { name: "Mindfulness Meditation Workshop", country: "Canada", price: 30, image: "url_to_image", category: "Yoga & Meditation" },
    { name: "Yoga Nidra Deep Relaxation", country: "Thailand", price: 25, image: "url_to_image", category: "Yoga & Meditation" },
    // Art & Creativity
    { name: "Painting with Watercolors", country: "United States", price: 30, image: "url_to_image", category: "Art & Creativity" },
    { name: "Sculpting Clay Figures", country: "Italy", price: 35, image: "url_to_image", category: "Art & Creativity" },
    { name: "Photography Walk", country: "France", price: 25, image: "url_to_image", category: "Art & Creativity" },
    // Music Classes
    { name: "Salsa Dance Workshop", country: "Mexico", price: 20, image: "url_to_image", category: "Music Classes" },
    { name: "Guitar Jam Session", country: "United States", price: 25, image: "url_to_image", category: "Music Classes" },
    // Fitness
    { name: "HIIT Workout Class", country: "United States", price: 20, image: "url_to_image", category: "Fitness" },
    { name: "Meditation and Stretching", country: "Japan", price: 25, image: "url_to_image", category: "Fitness" },
    { name: "Nature Yoga Retreat", country: "Canada", price: 40, image: "url_to_image", category: "Fitness" },
];


router.get('/', getEvents)

// router 
//     .route('/')
//     .get((req, res) => {            
//         // res.json(events) 
//         getEvents 
//     }).post((req, res) => {
//         createEvent
//     })

module.exports = router