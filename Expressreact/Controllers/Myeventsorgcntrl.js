const Event = require("../Models/Myeventsorgmodel");

// POST multiple events
const createEvents = async (req, res) => {
  try {
    const events = req.body; // expecting an array of event objects

    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ message: "Please provide an array of events." });
    }

    const savedEvents = await Event.insertMany(events);
    res.status(201).json({ message: "Events created successfully", events: savedEvents });
  } catch (error) {
    res.status(500).json({ error: "Error creating events", details: error.message });
  }
};

// GET all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();  
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", details: error.message });
  }
};



// 🆕 UPDATE existing event by ID
const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    res.status(500).json({ error: "Update failed", details: error.message });
  }
};

// 
// const deleteAllEvents = async (req, res) => {
//   try {
//     await Event.deleteMany({});
//     res.status(200).json({ message: "All events have been deleted successfully." });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting events", details: error.message });
//   }
// };

module.exports = {
  createEvents,
  getEvents,
  updateEvent
  // deleteAllEvents
};
