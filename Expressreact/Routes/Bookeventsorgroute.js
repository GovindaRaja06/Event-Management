const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getBookingsByUser
  // deleteAllBookings
} = require('../Controllers/Organizerbookedevents');

// POST /bookedusers/create
router.post('/create', createBooking);

// GET /bookedusers
router.get('/', getAllBookings);

// GET /bookedusers/user/:userId
router.get('/bookings/:userId', getBookingsByUser);

// router.delete('/deleteAll', deleteAllBookings);

module.exports = router;
