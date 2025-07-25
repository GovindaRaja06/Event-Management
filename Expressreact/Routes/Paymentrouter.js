const express = require('express');
const router = express.Router();
const { storePayment, getAllPayments } = require('../Controllers/Paymentcntrl');

// POST - store payment info
router.post('/add', storePayment);

// GET - optional, view all payment entries
router.get('/all', getAllPayments);

module.exports = router;
