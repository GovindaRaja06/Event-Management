// const Revenue = require('../Models/Revenueorgmodel');

// // POST: Add revenue data
// const createRevenue = async (req, res) => {
//   try {
//     const data = req.body; // can be single object or array of objects
//     const result = await Revenue.insertMany(data);
//     res.status(201).json({ message: 'Revenue data added', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // GET: All revenue data
// const getAllRevenue = async (req, res) => {
//   try {
//     const revenue = await Revenue.find();
//     res.json(revenue);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // GET: Revenue by event ID
// const getRevenueByEventId = async (req, res) => {
//   try {
//     const revenue = await Revenue.findOne({ eventId: req.params.eventId });
//     if (!revenue) return res.status(404).json({ message: "Event not found" });
//     res.json(revenue);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }

// };

// const deleteAllRevenue = async (req, res) => {
//   try {
//     await Revenue.deleteMany({});
//     res.status(200).json({ message: 'All revenue data deleted successfully.' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// module.exports = {
//   createRevenue,
//   getAllRevenue,
//   getRevenueByEventId,
//   deleteAllRevenue
// };




const Revenue = require('../Models/Revenueorgmodel');

// Create or update revenue
const addRevenue = async (req, res) => {
  try {
    const { eventId, totalRevenue, ticketSold, paymentMethod } = req.body;

    const revenue = new Revenue({ eventId, totalRevenue, ticketSold, paymentMethod });
    await revenue.save();

    res.status(201).json({ message: "Revenue recorded", data: revenue });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all revenue entries
const getAllRevenue = async (req, res) => {
  try {
    const all = await Revenue.find().populate('eventId');
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Old code above 
// const getAllRevenue = async (req, res) => {
//   try {
//     const all = await Revenue.find().populate({
//       path: 'eventId',
//       select: 'eventName' // OR 'title' — based on your Event model
//     });
//     res.json(all);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Get revenue by event ID
const getRevenueByEvent = async (req, res) => {
  try {
    const revenue = await Revenue.find({ eventId: req.params.eventId }).populate('eventId');
    res.json(revenue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addRevenue,
  getAllRevenue,
  getRevenueByEvent
};
