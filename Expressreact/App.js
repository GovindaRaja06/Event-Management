// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require('cors');
// // For multer below code 
// const path = require("path"); 
// // multer code ends here 
// const userRoutes = require("./Routes/userRoute");
// const organizerRoutes = require("./Routes/organizerRoute");
// const eventsRoutes = require("./Routes/Myeventsroute");
// const attendeeRoutes = require('./Routes/Attendeesroute');
// const eventsorg = require("./Routes/Eventsorgroute");
// const beventsorg = require("./Routes/Bookeventsorgroute");
// const revenueRoutes = require('./Routes/Revenueorgroute');
// const requestRoutes = require("./Routes/requestorgroute");
// const paymentRoutes = require('./Routes/Paymentrouter');
// const helpRoutes = require('./Routes/Helproute');
// const singleeventRoutes = require('./Routes/Singleeventsroute');
// const createevent = require("./Routes/Createeventroute");

// // Authorization below
// const authRoutes = require('./Routes/Userauthroutes');
// // For organizer
// const organizerAuthRoutes = require('./Routes/Organizerauthroute');

// console.log("Trying to connect to MongoDB...");
// app.use(express.json());

// // For multer code
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// // code ends here

// // checking pupose
// // Serve user app frontend build
// // app.use('/userapp', express.static(path.join(__dirname, 'user', 'build')));
// // app.get('/userapp/*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'user', 'build', 'index.html'));
// // });

// // // Serve organizer app frontend build
// // app.use('/organizerapp', express.static(path.join(__dirname, 'organizer', 'build')));
// // app.get('/organizerapp/*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'organizer', 'build', 'index.html'));
// // });
// // New codwe
// app.use('/organizerapp', express.static(path.join(__dirname, 'builds/Organizerpage')));
// app.get('/organizerapp/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'builds/Organizerpage', 'index.html'));
// });

// //  Serve Userpage build
// app.use('/userapp', express.static(path.join(__dirname, 'builds/Userpage')));
// app.get('/userapp/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'builds/Userpage', 'index.html'));
// });

// // endes here
// mongoose
//   .connect(
//    "mongodb+srv://agraja93853:5QSnTk6UKjtiIG7A@cluster0.p2tcrwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("MongoDB connected successfully");


//     app.use(cors());
//     app.use("/api/users",userRoutes);
//     app.use("/api/organizer",organizerRoutes); 
//     app.use("/api/events",eventsRoutes);
//     app.use('/api/attendees', attendeeRoutes);
//     app.use('/api', eventsorg);
//     app.use('/api',beventsorg);
//     app.use('/api', revenueRoutes);
//     app.use("/api/requests", requestRoutes);
//     app.use('/api/payments', paymentRoutes);
//     app.use('/api/help', helpRoutes);
//     app.use("/api/events", singleeventRoutes);
//     app.use("/api/organizerevent", createevent);
//     // Authorization below
//     app.use('/auth', authRoutes);
//     // For organizer
//     app.use('/organizer', organizerAuthRoutes);

//     app.listen(5000, (err) => {
//       if (err) {
//         console.log("Server error:", err);
//       } else { 
//         console.log("Server running on port 4444");
//       }
//     });
//   })
//   .catch((err) => {
//     console.log("MongoDB connection error:", err);
//   }); 



// Nwe code
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Route imports
const userRoutes = require("./Routes/userRoute");
const organizerRoutes = require("./Routes/organizerRoute");
const eventsRoutes = require("./Routes/Myeventsroute");
const attendeeRoutes = require('./Routes/Attendeesroute');
const eventsorg = require("./Routes/Eventsorgroute");
const beventsorg = require("./Routes/Bookeventsorgroute");
const revenueRoutes = require('./Routes/Revenueorgroute');
const requestRoutes = require("./Routes/requestorgroute");
const paymentRoutes = require('./Routes/Paymentrouter');
const helpRoutes = require('./Routes/Helproute');
const singleeventRoutes = require('./Routes/Singleeventsroute');
const createevent = require("./Routes/Createeventroute");

// Auth routes
const authRoutes = require('./Routes/Userauthroutes');
const organizerAuthRoutes = require('./Routes/Organizerauthroute');

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Static file serving
// app.use('/userapp', express.static(path.join(__dirname, 'builds/Userpage')));
// app.get('/userapp/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'builds/Userpage', 'index.html'));
// });

// app.use('/organizerapp', express.static(path.join(__dirname, 'builds/Organizerpage')));
// app.get('/organizerapp/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'builds/Organizerpage', 'index.html'));
// });
// Serve User app
// Full working code 
// app.use('/userapp', express.static(path.join(__dirname, 'builds/Userpage')));
// app.get(/^\/userapp(\/.*)?$/, (req, res) => {
//   res.sendFile(path.join(__dirname, 'builds/Userpage', 'index.html'));
// });

// // Serve Organizer app
// app.use('/organizerapp', express.static(path.join(__dirname, 'builds/Organizerpage')));
// app.get(/^\/organizerapp(\/.*)?$/, (req, res) => {
//   res.sendFile(path.join(__dirname, 'builds/Organizerpage', 'index.html'));
// });
// Code ends here 
// For checking purpose

// Serve User app
app.use('/userapp', express.static(path.join(__dirname, 'builds/Userpage')));
app.get(/^\/userapp(\/. *)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'builds/Userpage', 'index.html'));
});

// Serve Organizer app
app.use('/organizerapp', express.static(path.join(__dirname, 'builds/Organizerpage')));
app.get(/^\/organizerapp(\/. *)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'builds/Organizerpage', 'index.html'));
});
// 




// MongoDB connection
mongoose.connect(
  "mongodb+srv://agraja93853:5QSnTk6UKjtiIG7A@cluster0.p2tcrwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB connected successfully");

  // API routes
  app.use("/api/users", userRoutes);
  app.use("/api/organizer", organizerRoutes);
  app.use("/api/events", eventsRoutes); // All events
  app.use("/api/attendees", attendeeRoutes);
  app.use("/api/organizer-events", eventsorg); // Clearer path
  app.use("/api/booked-events", beventsorg);
  app.use("/api/revenue", revenueRoutes);
  app.use("/api/requests", requestRoutes);
  app.use("/api/payments", paymentRoutes);
  app.use("/api/help", helpRoutes);
  app.use("/api/single-event", singleeventRoutes); // Separate from general events
  app.use("/api/create-event", createevent);
  app.use("/auth", authRoutes);
  app.use("/organizer-auth", organizerAuthRoutes);

  // Start server
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
})
.catch((err) => {
  console.log("MongoDB connection error:", err);
});
 