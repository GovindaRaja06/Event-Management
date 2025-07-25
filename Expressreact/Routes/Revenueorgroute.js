// const express = require('express');
// const router = express.Router();
// const {
//   createRevenue,
//   getAllRevenue,
//   getRevenueByEventId,
//   deleteAllRevenue
// } = require('../Controllers/Revenueorgcntrl');

// // POST revenue data (single or multiple)
// router.post('/revenue', createRevenue);

// // GET all revenue data
// router.get('/revenue', getAllRevenue);

// // GET revenue by eventId
// router.get('/revenue/:eventId', getRevenueByEventId);
// router.delete('/deleteAllRevenue', deleteAllRevenue);

// module.exports = router;



const express = require('express');
const router = express.Router();
const {
  addRevenue,
  getAllRevenue,
  getRevenueByEvent
} = require('../Controllers/Revenueorgcntrl');

// POST - Add revenue
router.post('/', addRevenue);

// GET - All revenue
router.get('/revenue', getAllRevenue);

// GET - Revenue by event ID
router.get('/:eventId', getRevenueByEvent);

module.exports = router;
