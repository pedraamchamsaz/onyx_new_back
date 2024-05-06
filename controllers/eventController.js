const { Event } = require("../models/Event");

exports.getEvents = async function (req, res) {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send({ message: "Error fetching events." });
  }
};

exports.createEvent = async function (req, res) {
  try {
    const newEvent = req.body;
    const event = new Event({
      ...newEvent,
    });
    await event.save();
    res.json({ message: "New event inserted." });
  } catch {
    console.error("Error creating event:", error);
    res.status(500).send({ message: "Error creating event.", error });
  }
};
