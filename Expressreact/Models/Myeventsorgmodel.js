const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type:{
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  rsvpCount: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ["Upcoming", "Ongoing", "Completed", "Cancelled"],
    default: "Upcoming"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    default: "" // Optional: can leave empty if image not uploaded
  },
  time:{
    type:String,
    require:true
  }
});

module.exports = mongoose.model("Event", EventSchema);

