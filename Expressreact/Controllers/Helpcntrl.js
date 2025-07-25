// controllers/helpController.js
const Help = require('../Models/Help');

// Create a new help query
const createHelpQuery = async (req, res) => {
  try {
    const { name, email, query } = req.body;
    const newHelp = new Help({ name, email, query });
    await newHelp.save();
    res.status(201).json({ message: 'Help query submitted successfully', data: newHelp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all help queries
const getAllHelpQueries = async (req, res) => {
  try {
    const helpQueries = await Help.find().sort({ createdAt: -1 });
    res.status(200).json(helpQueries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// (Optional) Delete all help queries
const deleteAllHelpQueries = async (req, res) => {
  try {
    await Help.deleteMany({});
    res.status(200).json({ message: 'All help queries deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHelpQuery,
  getAllHelpQueries,
  deleteAllHelpQueries // optional
};
