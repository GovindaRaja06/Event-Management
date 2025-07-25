// routes/helpRoutes.js
const express = require('express');
const router = express.Router();
const {
  createHelpQuery,
  getAllHelpQueries,
  deleteAllHelpQueries
} = require('../Controllers/Helpcntrl');

// Route to submit help form
router.post('/placequery', createHelpQuery);

// Route to get all help submissions
router.get('/showquery', getAllHelpQueries);

// Optional: Route to delete all help queries
router.delete('/deletequery', deleteAllHelpQueries);

module.exports = router;
