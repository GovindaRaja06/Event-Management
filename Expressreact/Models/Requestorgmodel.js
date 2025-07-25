// const mongoose = require("mongoose");

// const requestSchema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true
//   },
//   eventName: {
//     type: String,
//     required: true
//   },
//   eventDate: {
//     type: String, 
//     required: true
//   },
//   eventTime: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model("Request", requestSchema);



const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
   name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  location: {
    type: String,
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
  }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
