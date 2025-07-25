const Event = require("../Models/Createeventmodel");

const createEvent = async (req, res) => {
  try {
    const {
      eventName,
      eventType,
      description,
      venue,
      address,
      city,
      state,
      startDate,
      endDate,
      ticketPrice,
      totalSeats,
      bookingDeadline,
      termsAccepted
    } = req.body;


    // // New code from
    //     const startDateObj = new Date(startDate);
    // const now = new Date();

    // // Check if start date is in the past
    // if (startDateObj < now) {
    //   return res.status(400).json({ message: "Start date must be in the future" });
    // }

    // // Optional: Check if end date is before start date
    // const endDateObj = new Date(endDate);
    // if (endDateObj <= startDateObj) {
    //   return res.status(400).json({ message: "End date must be after start date" });
    // }
    // // new code ends

    const newEvent = new Event({
      eventName,
      eventType,
      description,
      venue,
      address,
      city,
      state,
      startDate,
      endDate,
      ticketPrice,
      totalSeats,
      bookingDeadline,
      termsAccepted
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 }); // optional sorting by newest
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
};



module.exports = { createEvent ,getEvents };
