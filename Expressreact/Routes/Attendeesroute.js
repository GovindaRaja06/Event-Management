// // Routes/AttendeeRoutes.js
// const express = require('express');
// const router = express.Router();
// const {
//   addAttendees,
//   getAttendeesByEvent,
//   getAllAttendees,
//   deleteAllAttendees
// } = require('../Controllers/Attendeescntrl');

// // POST - Add attendees to an event
// router.post('/add', addAttendees);

// // GET - Get attendees by event ID
// router.get('/:eventId', getAttendeesByEvent);

// // GET - Get all attendee entries
// router.get('/', getAllAttendees);

// router.delete('/deleteAll', deleteAllAttendees);

// module.exports = router;





const express = require('express');
const router = express.Router();

const {
  addAttendee,
  getAllAttendees,
  getAttendeesByEvent,
  getAttendeesByUser
} = require('../Controllers/Attendeescntrl');

router.post('/add', addAttendee);
router.get('/', getAllAttendees);
router.get('/event/:eventId', getAttendeesByEvent);
router.get('/user/:userId', getAttendeesByUser);

module.exports = router;
