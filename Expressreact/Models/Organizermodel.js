const mongoose = require("mongoose"); 

const orgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  organizationName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  bio: String,
  // profileImage: String,
  // createdAt: {
  //   type: Date, 
  //   default: Date.now
  // }
});
module.exports = mongoose.model("organizer", orgSchema);
