const express = require("express");
const router = express.Router();
const { createEvent ,getEvents } = require("../Controllers/Createeventcntrl");

router.post("/createevent", createEvent);

router.get("/getevents", getEvents);

module.exports = router;
