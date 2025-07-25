const express = require("express");
const router = express.Router();

const { createEvent, getAllEvents, getEventById } = require("../Controllers/Singleeventcntrl");

// POST /event/create
router.post("/create", createEvent);

// GET /event/all
router.get("/all", getAllEvents);

// GET /event/:id
router.get("/singleevent/:id", getEventById);

module.exports = router;
