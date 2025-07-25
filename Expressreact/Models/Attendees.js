// const mongoose = require('mongoose');

// const attendeeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   }
// });

// const eventAttendeeSchema = new mongoose.Schema({
//   eventId: {
//     type: Number,
//     required: true
//   },
//   attendees: [attendeeSchema]
// }); 

// module.exports = mongoose.model('Attendee', eventAttendeeSchema);



const mongoose = require('mongoose');

const eventAttendeeSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Attendee', eventAttendeeSchema);
