// const User = require('../Models/Usermodel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const SECRET_KEY = 'yourSecretKey'; // Replace with .env later

// // Register
// const register = async (req, res) => {
//   try {
//     const { name, email, phone, password, role } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email, 
//       phone,
//       password: hashedPassword,
//       role
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully', userId: newUser.userId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Login
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'User not found' });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, {
//       expiresIn: '1h'
//     });

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       userId: user.userId,
//       role: user.role
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = { register, login };



const User = require('../Models/Usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Hardcoded secret key for development (replace later in production)
const SECRET_KEY = 'mySuperSecretKey123';

// ==========================
// Register New User
// ==========================
const register = async (req, res) => {
  try {
    const { name, email, phone, password, role , dob, gender, location, termsAccepted } = req.body;

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
       dob,
      gender,
      location,
      termsAccepted
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      userId: newUser.userId
    });
  } catch (err) {
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: errors });
    }

    // Duplicate key errors (email/phone)
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(409).json({ error: `${field} already exists` });
    }

    res.status(500).json({ error: err.message });
  }
};

// ==========================
// Login User
// ==========================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'User not found' });

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      userId: user.userId,
      role: user.role
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  register,
  login
};
