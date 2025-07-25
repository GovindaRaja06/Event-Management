// const Request = require("../Models/Requestorgmodel");

// // POST multiple requests
// const createRequests = async (req, res) => {
//   try {
//     const data = req.body;
//     const isArray = Array.isArray(data);
//     const result = isArray
//       ? await Request.insertMany(data)
//       : await new Request(data).save();

//     res.status(201).json({
//       message: "Request(s) saved successfully",
//       result
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // GET all requests
// const getRequests = async (req, res) => {
//   try {
//     const requests = await Request.find();
//     res.status(200).json(requests);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };




// const deleteAllRequests = async (req, res) => {
//   try {
//     await Request.deleteMany({});
//     res.status(200).json({ message: 'All request data deleted successfully.' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = { createRequests, getRequests, deleteAllRequests };

// Previousl used code before connection 
// below code is used not above


// const Request = require('../Models/Requestorgmodel');

// // Create a new request
// const createRequest = async (req, res) => {
//   try {
//     const request = new Request(req.body);
//     await request.save();
//     res.status(201).json({ message: 'Request created', data: request });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all requests
// const getAllRequests = async (req, res) => {
//   try {
//     const requests = await Request.find().populate('userId', 'name email');
//     res.status(200).json(requests);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get requests by userId
// const getRequestsByUserId = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const requests = await Request.find({ userId }).populate('userId', 'name email');

//     if (!requests.length) {
//       return res.status(404).json({ message: 'No requests found for this user' });
//     }

//     res.status(200).json(requests);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete all requests (optional)
// // const deleteAllRequests = async (req, res) => {
// //   try {
// //     await Request.deleteMany({});
// //     res.status(200).json({ message: 'All requests deleted successfully' });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// module.exports = {
//   createRequest,
//   getAllRequests,
//   getRequestsByUserId
//   // deleteAllRequests
// };


// New code for request page

const Request = require('../Models/Requestorgmodel');

//  Create a new user event request
const createRequest = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      location,
      eventName,
      eventDate,
      eventTime
    } = req.body;

    // Optional: basic validation
    // if (!userId || !name || !email || !mobile || !location || !eventName || !eventDate || !eventTime) {
    if (!name || !email || !mobile || !location || !eventName || !eventDate || !eventTime) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const request = new Request({
      // userId,
      name,
      email,
      mobile,
      location,
      eventName,
      eventDate,
      eventTime
    });

    await request.save();

    res.status(201).json({
      message: 'Request created successfully',
      data: request
    });
  } catch (err) {
    res.status(500).json({
      error: 'Error creating request',
      details: err.message
    });
  }
};

//  Get all requests (admin or organizer view)
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('name email');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({
      error: 'Error fetching requests',
      details: err.message
    });
  }
};
//  Get requests by a specific user (user's own view)
const getRequestsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const requests = await Request.find({ userId }).populate( 'name email');

    if (!requests.length) {
      return res.status(404).json({ message: 'No requests found for this user' });
    }

    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({
      error: 'Error fetching user requests',
      details: err.message
    });
  }
};

// Optional: delete all requests (for testing/admin cleanup)
// const deleteAllRequests = async (req, res) => {
//   try {
//     await Request.deleteMany({});
//     res.status(200).json({ message: 'All requests deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

module.exports = {
  createRequest,
  getAllRequests,
  getRequestsByUserId
  // deleteAllRequests
};
