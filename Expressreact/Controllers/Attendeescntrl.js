// // Controllers/AttendeeController.js
// const Attendee = require('../Models/Attendees');

// // Create or Add Attendees
// const addAttendees = async (req, res) => {
//   try {
//     const { eventId, attendees } = req.body;
    
//     const existing = await Attendee.findOne({ eventId });

//     if (existing) {
//       // If event already has attendees, update the list
//       existing.attendees.push(...attendees);
//       await existing.save();
//       res.status(200).json({ message: "Attendees updated", data: existing });
//     } else {
//       // Create new entry
//       const newEntry = new Attendee({ eventId, attendees });
//       await newEntry.save();
//       res.status(201).json({ message: "Attendees added", data: newEntry });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get Attendees by Event ID
// const getAttendeesByEvent = async (req, res) => {
//   try {
//     const { eventId } = req.params;
//     const attendees = await Attendee.findOne({ eventId });

//     if (!attendees) {
//       return res.status(404).json({ message: "No attendees found for this event" });
//     }

//     res.json(attendees);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all attendees
// const getAllAttendees = async (req, res) => {
//   try {
//     const all = await Attendee.find();
//     res.json(all);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// const deleteAllAttendees = async (req, res) => {
//   try {
//     await Attendee.deleteMany({});
//     res.status(200).json({ message: 'All attendees deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// module.exports = {
//   addAttendees,
//   getAttendeesByEvent,
//   getAllAttendees,
//   deleteAllAttendees
// };




const Attendee = require('../Models/Attendees');

// POST - Add an attendee to an event
const addAttendee = async (req, res) => {
  try {
    const { eventId, userId } = req.body;

    // Prevent duplicate entry
    const exists = await Attendee.findOne({ eventId, userId });
    if (exists) {
      return res.status(400).json({ message: 'User already registered for this event' });
    }

    const attendee = new Attendee({ eventId, userId });
    await attendee.save();

    res.status(201).json({ message: 'Attendee added successfully', data: attendee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET - All attendees with populated event and user data
const getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find().populate('eventId').populate('userId');
    res.json(attendees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET - Attendees by event
const getAttendeesByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const attendees = await Attendee.find({ eventId }).populate('userId');
    res.json(attendees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET - Attendees by user
const getAttendeesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userEvents = await Attendee.find({ userId }).populate('eventId');
    res.json(userEvents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addAttendee,
  getAllAttendees,
  getAttendeesByEvent,
  getAttendeesByUser
};
