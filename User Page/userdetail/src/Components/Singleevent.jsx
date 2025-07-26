// import React, { useEffect, useState } from 'react';
// // import eventsdata from '../DB/Events.json'
// import {Link} from 'react-router-dom';
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// const Singleevent = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await axios.get(`https://event-management-server-9kdv.onrender.com/singleevent/${id}`);
//         setEvent(res.data);
//       } catch (err) {
//         console.error("Error fetching event:", err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!event) return <p>Event not found</p>;
//   return (
//     <div className='event-detail'>
//       <div className='inner-event'>
//         <h3 className='inner-heading'>Events Booking</h3>
//         <h3>{event.eventName}</h3>
//         <p>EventId:{event.eventId}</p>
//         <p>Event Type:{event.eventType}</p>
//         <p>Event Date:{event.date}</p>
//         <p>Event Time:{event.time}</p>
//         <p>Event Location:{event.location}</p>
//         <Link to="/payment">
//         <button className='proceed'>Book Tickets</button>
//         </Link>
//       </div>
//       <p className='inner-last'>&copy;Evoques Events |2025 All rights are reseved</p>
//     </div>
//   )
// }

// export default Singleevent

// Code below for the single page 


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Singleevent = () => {
  const { id } = useParams();
  console.log("params id",id)
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await axios.get(`https://event-management-server-9kdv.onrender.com/api/events/singleevent/${id}`);
        // const response = await axios.get(`https://event-management-server-9kdv.onrender.com/api/events/singleevent/${id}`);
        // console.log(event)
        // const response = await axios.get(`https://event-management-server-9kdv.onrender.com/api/events/singleevent/EVT001`);
        if (response.data) {
          setEvent(response.data);
        } else {
          setError("Event not found.");
        }
      } catch (err) {
        console.log("Fetch error:", err.message);
        setError("Failed to fetch event.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadEvent();
    } else {
      setError("Invalid event ID.");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="event-detail">
      <div className="inner-event">
        <h3 className="inner-heading">Event Booking</h3>
        <h3>{event.type}</h3>
        {/* <p><strong>Event ID:</strong> {event.eventId}</p> */}
        {/* <p><strong>Type:</strong> {event.eventType}</p> */}
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <Link to="/payment">
          <button className="proceed">Book Tickets</button>
        </Link>
      </div>
      <p className="inner-last">&copy; Evoques Events | 2025 All rights reserved</p>
    </div>
  );
};

export default Singleevent;
