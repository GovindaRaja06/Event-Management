// const express = require("express");
// const router = express.Router();
// const { createEvents, getEvents  } = require("../Controllers/Myeventsorgcntrl");

// router.post("/events", createEvents);  // POST multiple events
// router.get("/events", getEvents);      // GET all events
// // router.delete("/events", deleteAllEvents); 

// module.exports = router;


// Above code is the existing code for displaying the events data and storing 


// Below code is the code along with  the multer concepts 
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createEvents, getEvents , updateEvent } = require("../Controllers/Myeventsorgcntrl");
const Event = require("../Models/Myeventsorgmodel"); // Make sure Event model is imported

// Multer Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name with extension
  }
});
const upload = multer({ storage: storage });

// Existing Routes
router.post("/events", createEvents);  // POST multiple events
router.get("/events", getEvents);      // GET all events
// router.post("/update/:id",updateEvent)
router.put("/:id", updateEvent);

// 🔼 NEW: Upload Image for Specific Event
router.post("/upload/:id", upload.single("image"), async (req, res) => {
  try {
    const eventId = req.params.id;
    const imageUrl = `/uploads/${req.file.filename}`;

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { imageUrl },
      { new: true }
    );

    res.status(200).json({
      message: "Image uploaded and event updated",
      event: updatedEvent
    });
  } catch (err) {
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});


router.put("/:id", updateEvent);

module.exports = router;
