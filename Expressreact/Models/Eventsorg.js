// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//     eventId: Number,
//     eventName: String,
//     eventType: String,
//     date: String,
//     time: String,
//     location: String,
//     poster: String
// });

// const organizerEventSchema = new mongoose.Schema({
//     organizerId: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     organizerName: {
//         type: String,
//         required: true
//     },
//     events: [eventSchema]
// });

// module.exports = mongoose.model('OrganizerEvent', organizerEventSchema);



const mongoose = require('mongoose');

const organizerEventSchema = new mongoose.Schema({
  // organizerId: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'Organizer' 
  },
  organizerName: {
    type: String,
    required: true
  },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event' 
  }]
});

module.exports = mongoose.model('OrganizerEvent', organizerEventSchema);
