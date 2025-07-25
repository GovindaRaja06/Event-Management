// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
// //   userId: {
// //     type: String,
// //     unique: true,
// //     required: true
// //   },
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     enum: ["user", "organizer", "admin"],
//     required: true
//   }
// });

// // ✅ Auto-generate userId before saving
// userSchema.pre("save", async function (next) {
//   if (!this.userId) {
//     try {
//       const count = await mongoose.model("User").countDocuments();
//       this.userId = `USR${(count + 1).toString().padStart(3, "0")}`;
//       next();
//     } catch (err) {
//       next(err); // important to pass errors!
//     }
//   } else {
//     next();
//   }
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^[0-9]{10}$/, "Phone number must be 10 digits"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"]
  },
    dob: {
    type: Date,
    required: [true, "Date of birth is required"]
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [true, "Gender is required"]
  },
  location: {
    type: String,
    required: [true, "Location is required"]
  },
  termsAccepted: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ["user", "organizer", "admin"],
    required: [true, "Role is required"]
  }
});

// Auto-generate userId before saving
userSchema.pre("save", async function (next) {
  if (!this.userId) {
    try {
      const count = await mongoose.model("User").countDocuments();
      this.userId = `USR${(count + 1).toString().padStart(3, "0")}`;
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
