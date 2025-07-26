// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import attendees from '../DB/Attendees.json'
// const Adetail = () => {
//     const location = useLocation();
//     const eventId = location.state?.eventId
//     if (!eventId) {
//         <p>No Attender in the Event</p>
//     }
//     const eventattendees = attendees.find(e => e.eventId === eventId)?.attendees || [];
//     return (
//         <div>
//             <div className="event-attender">
//                 <h2 className='a-heading'>Event Id:{eventId}</h2>
//                 <div className="mini-container">
//                     {eventattendees.length === 0 ? (
//                         <p>No attender found</p>
//                     ) : (
//                         // <ul>
//                         <div className='a-container'>
//                             {eventattendees.map((attendee, index) => (
//                                 // <li key={eventId}>
//                                 //     <p>Name:{attendee.name}-Email:{attendee.email}</p>
//                                 // </li>
//                                 <div key={eventId} className='a-name'>
//                                     <p>Name:{attendee.name}</p>
//                                     <p>Email:{attendee.email}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         // </ul>
//                     )}
//                 </div>
//                 <div >
//                     <Link to="/dashboard">
//                     <button className='a-btn'>Done</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Adetail



import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Adetail = () => {
  const location = useLocation();
  const eventId = location.state?.eventId;
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await fetch(`https://event-management-server-9kdv.onrender.com/api/attendees/event/${eventId}`);
        const data = await response.json();
        setAttendees(data); // backend returns attendee list with populated userId
        setLoading(false);
      } catch (err) {
        console.error('Error fetching attendees:', err);
        setLoading(false);
      }
    };

    if (eventId) {
      fetchAttendees();
    }
  }, [eventId]);

  if (!eventId) {
    return <p>No Event ID provided.</p>;
  }

  if (loading) {
    return <p>Loading attendees...</p>;
  }

  return (
    <div className="event-attender">
      <h2 className="a-heading">Event ID: {eventId}</h2>
      <div className="mini-container">
        {attendees.length === 0 ? (
          <p>No attendees found</p>
        ) : (
          <div className="a-container">
            {attendees.map((a, index) => (
              <div key={index} className="a-name">
                <p>Name: {a.userId?.name}</p>
                <p>Email: {a.userId?.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Link to="/dashboard">
          <button className="a-btn">Done</button>
        </Link>
      </div>
    </div>
  );
};

export default Adetail;
