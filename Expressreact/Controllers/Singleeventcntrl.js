const Event = require("../Models/Myeventsorgmodel");

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { eventName, eventType, date, time, location, eventId } = req.body;

    const newEvent = new Event({
      eventName,
      eventType,
      date,
      time,
      location,
      eventId
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", data: newEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single event by ID
const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)
    const event = await Event.findById(id); 
    console.log(event)
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
};

module.exports = { createEvent, getAllEvents, getEventById };
