// const express= require("express");
// const router = express.Router()
// const {getUser, createUser, deleteUser} = require("../Controllers/userController")
// router.get("/", getUser)
// router.post("/", createUser)
// router.delete("/", deleteUser);
// module.exports = router;    



// const express = require("express");
// const router = express.Router();
// const {
//   createUser,
//   getAllUsers,
//   getUserById,
//   deleteUser
// } = require("../Controllers/userController");

// // POST /api/users - create user
// router.post("/", createUser);

// // GET /api/users - get all users
// router.get("/", getAllUsers);

// // GET /api/users/:id - get single user by _id
// router.get("/:id", getUserById);

// // DELETE /api/users/:id - delete user by _id
// router.delete("/:id", deleteUser);

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const { createUser, getAllUsers } = require("../Controllers/userController");

// router.post("/create", createUser);
// router.get("/all", getAllUsers);

// module.exports = router;



// With Role Base Access

const express = require("express");
const router = express.Router();
const { createUser, getAllUsers , verifyUserToken , getUserProfile  } = require("../Controllers/userController");

const { verifyToken, authorizeRoles } = require('../Middlewares/Usermiddleware');
// router.post("/create", createUser);
// router.get("/all", getAllUsers);

router.post("/create", verifyToken, authorizeRoles("admin","organizer" ,"user"), createUser);
router.get("/all", verifyToken, authorizeRoles("admin","organizer","user"), getAllUsers);
// router.get("/:id", verifyToken, authorizeRoles("admin","organizer","user"), getUserProfile);
// Route to verify 
router.get("/verify", verifyToken, verifyUserToken);
// For profile 
router.get("/profile/:id", verifyToken, getUserProfile);

module.exports = router;

// Code ends here


// Without RoleBased Accesss
// const express = require("express"); 
// const router = express.Router();
// const { createUser, getAllUsers } = require("../Controllers/userController");

// const { verifyToken } = require('../Middlewares/Usermiddleware');

// // ✅ Only verify token (authentication), no role restriction
// router.post("/create", verifyToken, createUser);
// router.get("/all", verifyToken, getAllUsers);

// module.exports = router;
