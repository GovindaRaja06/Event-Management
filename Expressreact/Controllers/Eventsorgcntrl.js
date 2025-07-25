// const OrganizerEvent = require('../Models/Eventsorg');

// // POST: Add a new organizer with events
// const createOrganizerEvent = async (req, res) => {
//     try {
//         const { organizerId, organizerName, events } = req.body;
//         const newOrganizer = new OrganizerEvent({ organizerId, organizerName, events });
//         await newOrganizer.save();
//         res.status(201).json({ message: 'Organizer and events added', data: newOrganizer });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // GET: Get all organizers with events
// const getAllOrganizerEvents = async (req, res) => {
//     try {
//         const data = await OrganizerEvent.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // GET: Get a single organizer by ID
// const getOrganizerById = async (req, res) => {
//     try {
//         const organizer = await OrganizerEvent.findOne({ organizerId: req.params.id });
//         if (!organizer) return res.status(404).json({ message: 'Organizer not found' });
//         res.json(organizer);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };


// const deleteAllOrganizers = async (req, res) => {
//   try {
//     const result = await OrganizerEvent.deleteMany({});
//     res.json({
//       message: 'All organizer records deleted successfully',
//       deletedCount: result.deletedCount
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = {
//     createOrganizerEvent,
//     getAllOrganizerEvents,
//     getOrganizerById,
//     deleteAllOrganizers
// };



const OrganizerEvent = require('../Models/Eventsorg');
const Event = require('../Models/Myeventsorgmodel');

// POST: Create organizer with existing event IDs
const createOrganizerEvent = async (req, res) => {
  try {
    const { organizerId, organizerName, events } = req.body;

    // Optional: Validate referenced event IDs 
    const foundEvents = await Event.find({ _id: { $in: events } });
    if (foundEvents.length !== events.length) {
      return res.status(400).json({ message: 'Invalid event IDs provided' });
    }

    const newOrganizer = new OrganizerEvent({ organizerId, organizerName, events });
    await newOrganizer.save();

    res.status(201).json({ message: 'Organizer created', data: newOrganizer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET: All organizers with populated events
const getAllOrganizerEvents = async (req, res) => {
  try {
    const organizers = await OrganizerEvent.find().populate('events');
    res.json(organizers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET: Single organizer by ID
const getOrganizerById = async (req, res) => {
  try {
    const organizer = await OrganizerEvent.findOne({ organizerId: req.params.id }).populate('events');
    if (!organizer) return res.status(404).json({ message: 'Organizer not found' });
    res.json(organizer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: One organizer
const deleteOrganizerById = async (req, res) => {
  try {
    const deleted = await OrganizerEvent.findOneAndDelete({ organizerId: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Organizer not found' });
    res.json({ message: 'Organizer deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  

// DELETE: All organizers
// const deleteAllOrganizers = async (req, res) => {
//   try {
//     const result = await OrganizerEvent.deleteMany({});
//     res.json({ message: 'All organizers deleted', deletedCount: result.deletedCount });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// new code to get organizer by id 
//  GET: Logged-in organizer's events (based on token)
// const getMyEvents = async (req, res) => {
//   try {
//     const organizerId = req.user._id;
//     console.log("Logged-in ID:", req.user._id);

//     const data = await OrganizerEvent.findOne({ organizerId }).populate('events');
//     console.log("Fetched Organizer Data:", data);
//     if (!data) return res.status(404).json({ message: 'No events found for this organizer.' });

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// 



// const mongoose = require("mongoose");
// const getMyEvents = async (req, res) => {
//   try {
//     const organizerObjectId = new mongoose.Types.ObjectId(req.user._id); //  Ensure proper ObjectId format
//     console.log("Logged-in Organizer ID:", organizerObjectId);

//     const organizer = await OrganizerEvent.findOne({ organizerId: organizerObjectId }).populate('events');

//     if (!organizer) {
//       return res.status(404).json({ message: 'No events found for this organizer.' });
//     }

//     res.status(200).json({ events: organizer.events }); //  Return events array directly
//   } catch (err) {
//     console.error("Error in getMyEvents:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };


// Very new code
// const getMyEvents = async (req, res) => {
//   try {
//     const organizerId = req.user.id; // this should come from the decoded token
//     // console.log(organizerId)

//     const organizer = await OrganizerEvent.findOne({ organizerId }).populate('events');
//     // console.log("Organizer data:", organizer);

//     if (!organizer) {
//       return res.status(404).json({ message: 'Organizer not found or not registered with events.' });
//     }

//     if (!organizer.events || organizer.events.length === 0) {
//       return res.status(200).json({ message: 'No events found for this organizer.', events: [] });
//     }

//     res.status(200).json({ message: 'Events retrieved successfully', events: organizer.events });
//   } catch (err) { 
//     res.status(500).json({ error: err.message });
//   }
// };

// Finalized code for my events page !!

const getMyEvents = async (req, res) => {
  try {
    const organizerMongoId = req.user._id || req.user.id;

    // console.log("Organizer ID from token:", organizerMongoId);

    const organizer = await OrganizerEvent.findOne({ organizerId: organizerMongoId }).populate('events');

    if (!organizer) {
      // console.log("Organizer not found with ID:", organizerMongoId);
      return res.status(404).json({ message: 'Organizer not found or not registered with events.' });
    }

    res.status(200).json({ events: organizer.events });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// To add data with existing data 
// const OrganizerEvent = require('../Models/Eventsorg');

const addEventsToOrganizer = async (req, res) => {
  const { organizerId, eventIds } = req.body;

  try {
    const organizer = await OrganizerEvent.findOneAndUpdate(
      { organizerId },
      { $addToSet: { events: { $each: eventIds } } }, // push new events only
      { new: true }
    ).populate('events');
 
    if (!organizer) {
      return res.status(404).json({ message: 'Organizer not found' });
    }

    res.status(200).json({ message: 'Events added successfully', organizer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  createOrganizerEvent,
  getAllOrganizerEvents,
  getOrganizerById,
  deleteOrganizerById,
  getMyEvents,
  addEventsToOrganizer
  // deleteAllOrganizers
};
