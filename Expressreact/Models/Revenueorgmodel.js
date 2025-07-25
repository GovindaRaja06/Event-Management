// const mongoose = require('mongoose');

// const revenueSchema = new mongoose.Schema({
//   eventId: {
//     type: Number,
//     required: true,
//     unique: true
//   },
//   eventName: {
//     type: String,
//     required: true
//   },
//   revenue: {
//     type: Number,
//     required: true
//   }
// });

// const Revenue = mongoose.model('Revenueorg', revenueSchema);
// module.exports = Revenue;




const mongoose = require('mongoose');

const revenueSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  totalRevenue: {
    type: Number,
    required: true
  },
  ticketSold: {
    type: Number,
    default: 0
  },
  paymentMethod: {
    type: String,
    enum: ['UPI', 'Card', 'Cash', 'Online'],
    default: 'Online'
  }
}, { timestamps: true });

module.exports = mongoose.model('Revenueorg', revenueSchema);
