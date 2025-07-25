// const express = require('express');
// const router = express.Router();
// const {
//     createOrganizerEvent,
//     getAllOrganizerEvents,
//     getOrganizerById,
//     deleteAllOrganizers
// } = require('../Controllers/Eventsorgcntrl');

// router.post('/organizers', createOrganizerEvent);
// router.get('/organizers', getAllOrganizerEvents);
// router.get('/organizers/:id', getOrganizerById);
// router.delete('/organizers', deleteAllOrganizers);

// module.exports = router;


const express = require('express');
const router = express.Router();

const {
  createOrganizerEvent,
  getAllOrganizerEvents,
  getOrganizerById,
  deleteOrganizerById,
  getMyEvents,
  addEventsToOrganizer
  // deleteAllOrganizers
} = require('../Controllers/Eventsorgcntrl');
const { verifyToken } = require('../Middlewares/Usermiddleware');

router.post('/organizers', createOrganizerEvent);
// router.get('/organizers', getAllOrganizerEvents);
router.get('/organizers', verifyToken, getAllOrganizerEvents);
// router.get('/organizers/:id', getOrganizerById);
// router.delete('/organizers/:id', deleteOrganizerById); 

// New route 
router.get('/organizers/my-events', verifyToken, getMyEvents);
// ends here
// router.delete('/organizers', deleteAllOrganizers);
// For put method
router.put('/organizers/add-events', verifyToken, addEventsToOrganizer);

   
module.exports = router;
