// // const User = require("../Models/Usermodel")
// // const getUser = async(req, res)=>{
// //     try{
// //         const users = await User.find()
// //         res.json(users);
// //     }
// //     catch(err){
// //         res.status(500).json({error:"Internal error"});
// //     }
// // };

// // // const createUser = async (req, res) => {
// // //     try {
// // //         const { name, email,password ,phone,role} = req.body;
// // //         const newUser = new User({ name, email ,password,phone,role });
// // //         await newUser.save();
// // //         res.status(201).json({ message: "User created successfully", newUser });
// // //     } catch (err) {
// // //         res.status(400).json({ error: "Error creating user", details: err.message });
// // //     }
// // // };


// // const createUser = async (req, res) => {
// //     try {
// //         const users = req.body;
// //         if (!Array.isArray(users)) {
// //             return res.status(400).json({ error: "Expected an array of users" });
// //         }
// //         const newUsers = await User.insertMany(users);

// //         res.status(201).json({
// //             message: "Users created successfully",
// //             users: newUsers,
// //         });
// //     } catch (err) {
// //         res.status(400).json({
// //             error: "Error creating users",
// //             details: err.message,
// //         });
// //     }
// // };

// // const deleteUser = async (req, res) => {
// //   try {
// //     await User.deleteMany({});
// //     res.status(200).json({ message: "All users deleted successfully." });
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to delete users." });
// //   }
// // };
// // module.exports = {getUser , createUser, deleteUser}  



// // const User = require("../Models/Usermodel");

// // // Create a new user
// // const createUser = async (req, res) => {
// //   try {
// //     const { name, email, phone, password, role } = req.body;

// //     const newUser = new User({ name, email, phone, password, role });
// //     await newUser.save();

// //     res.status(201).json({
// //       message: "User created successfully",
// //       data: newUser
// //     });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // // Get all users
// // const getAllUsers = async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password"); // hide password
// //     res.status(200).json(users);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // // Get single user by Mongo _id
// // const getUserById = async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id).select("-password");
// //     if (!user) return res.status(404).json({ message: "User not found" });
// //     res.status(200).json(user);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // // Delete user by _id
// // const deleteUser = async (req, res) => {
// //   try {
// //     const result = await User.findByIdAndDelete(req.params.id);
// //     if (!result) return res.status(404).json({ message: "User not found" });
// //     res.json({ message: "User deleted successfully" });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // module.exports = {
// //   createUser,
// //   getAllUsers,
// //   getUserById,
// //   deleteUser
// // };


// const User = require("../Models/Usermodel");

// const createUser = async (req, res) => {
//   try {
//     const { name, email, phone, password, role } = req.body;

//     const newUser = new User({ name, email, phone, password, role });

//     await newUser.save();

//     res.status(201).json({
//       message: "User created successfully",
//       user: newUser
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = { createUser, getAllUsers };



const User = require("../Models/Usermodel");

const createUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    const newUser = new User({ name, email, phone, password, role });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser
    });
  } catch (err) {
    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: errors });
    }

    // Handle duplicate key error (e.g., email)
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(409).json({ error: `${field} already exists` });
    }

    res.status(500).json({ error: "Server error: " + err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const verifyUserToken = (req, res) => {
  try {
    res.status(200).json({
      message: "Token is valid",
      user: req.user  // set in verifyToken middleware
    });
  } catch (error) {
    res.status(500).json({ message: "Token verification failed", error: error.message });
  }
};

// For profile 
const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOne({ userId }).select("-password -_id -__v");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
};


module.exports = { createUser, getAllUsers , verifyUserToken ,getUserProfile };
