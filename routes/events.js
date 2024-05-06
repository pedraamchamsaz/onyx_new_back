const express = require('express')
const router = express.Router()
const { getEvents, getSingleEvent, createEvent } = require('../controllers/eventController');


router.get('/', getEvents)
router.get('/:id', getSingleEvent)
router.post('/', createEvent)

module.exports = router