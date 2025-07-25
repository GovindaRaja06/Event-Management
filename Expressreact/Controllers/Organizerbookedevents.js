const BookedUser = require('../Models/Bookedeventsorgmodel');

// Create new booking
const createBooking = async (req, res) => {
  try {
    const { userId, eventId, eventName, eventDate, eventTime } = req.body;

    const count = await BookedUser.countDocuments({ userId });

    const bookingLabel = `Booking${count + 1}`;

    const newBooking = new BookedUser({
      userId,
      eventId,
      eventName,
      eventDate,
      eventTime,
      bookingLabel
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created', data: newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await BookedUser.find()
      .populate('userId')
      .populate('eventId');

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get bookings for a specific user
const getBookingsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await BookedUser.find({ userId }).populate('eventId');

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user.' });
    }

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const deleteAllBookings = async (req, res) => {
//   try {
//     await BookedUser.deleteMany({});
//     res.status(200).json({ message: 'All bookings deleted successfully.' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

module.exports = {
  createBooking,
  getAllBookings,
  getBookingsByUser
  // deleteAllBookings
};
