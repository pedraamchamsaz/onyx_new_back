const { Event } = require("../models/Event");

// const events = [
//   {
//     name: "Indian Cooking Class",
//     country: "India",
//     price: 25,
//     image: "url_to_image",
//     category: "Cooking Classes",
//   },
//   {
//     name: "Chinese Cooking Class",
//     country: "China",
//     price: 30,
//     image: "url_to_image",
//     category: "Cooking Classes",
//   },
//   {
//     name: "Spanish Cuisine Workshop",
//     country: "Spain",
//     price: 35,
//     image: "url_to_image",
//     category: "Cooking Classes",
//   }
// ];

exports.getEvents = async function (req, res) {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send({ message: "Error fetching events." });
  }
};

exports.getSingleEvent = async function (req, res) {
  try {
    const eventId = req.params.id;
    const singleEvent = await Event.findById(eventId);
    res.json(singleEvent);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).send({ message: "Error fetching event." });
  }
};

// exports.createEvent = async function (req, res) {
//   try {
//     events.map(async (item) => {
//       const event = new Event({
//         ...item,
//       });
//       await event.save();
//     });
//     res.send({ message: "New events inserted." });
//   } catch {
//     console.error("Error creating events:", error);
//     res.status(500).send({ message: "Error creating event.", error });
//   }
// };

exports.createEvent = async function (req, res) {
  try {
    const newEvent = req.body;
    const event = new Event({
      ...newEvent,
    });
    await event.save();
    res.send({ message: "New event inserted." });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).send({ message: "Error creating event.", error });
  }
};
