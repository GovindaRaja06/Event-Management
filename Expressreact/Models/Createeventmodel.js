const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  description: { type: String, required: true },
  venue: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  ticketPrice: { type: Number, required: true },
  totalSeats: { type: Number, required: true },
  bookingDeadline: { type: String, required: true },
  termsAccepted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("createevent", eventSchema);
