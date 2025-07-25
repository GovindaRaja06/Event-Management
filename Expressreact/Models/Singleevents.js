const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  date: {
    type: String, // or Date if using Date type
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    unique: true,
    required: true
  }
});

const Event = mongoose.model("Singleevent", eventSchema);
module.exports = Event;
