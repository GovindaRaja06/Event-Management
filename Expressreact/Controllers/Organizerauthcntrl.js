const Organizer = require('../Models/Organizermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mySuperSecretKey123'; // Same as used elsewhere

// Organizer Register
const registerOrganizer = async (req, res) => {
  try {
    const { name, organizationName, email, phone, password, address, bio, profileImage } = req.body;

    const existing = await Organizer.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newOrganizer = new Organizer({
      name,
      organizationName,
      email,
      phone,
      password: hashedPassword,
      address,
      bio,
      profileImage
    });

    await newOrganizer.save();

    res.status(201).json({
      message: 'Organizer registered successfully',
      organizerId: newOrganizer._id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Organizer Login
const loginOrganizer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const organizer = await Organizer.findOne({ email });
    if (!organizer) return res.status(401).json({ message: 'Organizer not found' });

    const validPassword = await bcrypt.compare(password, organizer.password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

    // const token = jwt.sign(
    //   { organizerId: organizer._id, role: "organizer" },
    //   SECRET_KEY,
    //   { expiresIn: '1h' }
    // );
    // New code for organizer hositing events 
    const token = jwt.sign(
      { _id: organizer._id, role: "organizer" },  // ✅ FIXED: change organizerId to _id
      SECRET_KEY,
      { expiresIn: '1h' }
    );


    res.status(200).json({
      message: 'Login successful',
      token, 
      organizerId: organizer._id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerOrganizer, loginOrganizer };
