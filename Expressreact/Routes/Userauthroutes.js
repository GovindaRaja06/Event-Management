const express = require('express');
const router = express.Router();
const { register, login } = require('../Controllers/Userauthcontroller'); // adjust path as needed

// POST /auth/register
router.post('/register', register);

// POST /auth/login
router.post('/login', login);

module.exports = router;
    