const express = require("express")
const route = express.Router()
const {getOrg , createOrg ,patchOrg , getOrgById}  = require("../Controllers/Organizerctrl")
const { verifyToken, authorizeRoles } = require("../Middlewares/Usermiddleware");

// Authorizatio code starts here 
// Get all organizers (admin or organizer access, optional)
route.get("/", verifyToken, authorizeRoles("organizer", "admin"), getOrg);

// Create organizer (already handled by /organizer/register, so optional here)
route.post("/", verifyToken, authorizeRoles("organizer"), createOrg);

// Update organizer (protected)
route.patch("/update/:id", verifyToken, authorizeRoles("organizer"), patchOrg);
// code ends here 
// for profile of organizer is below
// ✅ Add this route before other GET routes
route.get("/:id", verifyToken, authorizeRoles("organizer"), getOrgById);
// ended


route.get("/",getOrg) 
route.post("/",createOrg)
route.patch("/update/:id",patchOrg)
// route.delete("/",deleteOrg)
module.exports = route;