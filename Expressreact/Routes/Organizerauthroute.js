const express = require('express');
const router = express.Router();
const { registerOrganizer, loginOrganizer } = require('../Controllers/Organizerauthcntrl');

// POST /organizer/register
router.post('/register', registerOrganizer);

// POST /organizer/login
router.post('/login', loginOrganizer);

module.exports = router;
