// const express = require("express");
// const router = express.Router();
// const { createRequests, getRequests,deleteAllRequests } = require("../Controllers/Requestorgcntrl");

// router.post("/", createRequests);  // For inserting one or many
// router.get("/", getRequests);      // For viewing all
// router.delete('/deleteAll', deleteAllRequests);

// module.exports = router;



const express = require('express');
const router = express.Router();

const {
  createRequest,
  getAllRequests,
  getRequestsByUserId
  // deleteAllRequests
} = require('../Controllers/Requestorgcntrl');

// POST - Create a new request
router.post('/', createRequest);

// GET - All requests
router.get('/revent', getAllRequests);

// GET - Requests by user ID
router.get('/user/:userId', getRequestsByUserId);

// DELETE - Delete all requests
// router.delete('/deleteAll', deleteAllRequests); 

module.exports = router; 
