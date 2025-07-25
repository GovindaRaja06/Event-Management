const mongoose = require('mongoose');

const bookedUserSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  eventTime: {
    type: String,
    required: true
  },
  bookingStatus: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'confirmed'
  },
  bookedAt: {
    type: Date,
    default: Date.now
  },
  bookingLabel: {
    type: String,
    required: true
  }
});

const BookedUser = mongoose.model('BookedEvent', bookedUserSchema);
module.exports = BookedUser;
