// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
// // import myevents from '../DB/Myevents.json'
// import axios from 'axios';

// const Myevnetsorg = () => {
//     const [searchTerm ,setSearchTerm] = useState("");
//     const [events, setEvents] = useState([]);
//     const navigate = useNavigate(); 
//      useEffect(() => {
//     const fetchMyEvents = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Assumes token is stored on login
//         const response = await axios.get("https://event-management-server-9kdv.onrender.com/api/organizers/my-events", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setEvents(response.data.events); // `events` is a populated field in your OrganizerEvent
//       } catch (error) {
//         console.error("Failed to fetch events:", error.response?.data || error.message);
//       }
//     };

//     fetchMyEvents();
//   }, []);
// // 



//     const filteredEvents = events.filter( data =>
//         data.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         data.location.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     const handleSearchChange = (e) => {
//   setSearchTerm(e.target.value);
// };

//    const handleEdit = (eventData) => {
//         navigate('/dashboard/editevent', { state: { event: eventData } }); 
//     };
//     const handleViewAttendees = (eventId) =>{
//       navigate('/dashboard/viewattendees',{state:{eventId}});
//     };

//   return (
//     <div>
//         <p className='myevent-heading'>My Events</p>
//         <input type="text" placeholder='Search Event' className='searchbar' value={searchTerm} onChange={handleSearchChange} />
//          {/* <span className="search-icon">🔍</span> */}
//         <div className='event-container'>
//         {filteredEvents.map(data => (
//             <div key={data.id} className='innermyevent'>
//                 <h3>{data.eventName}</h3>
//                 <p>Event Id : {data._id}</p>
//                 <p>Event Date: {data.date}</p>
//                 <p>Event Location: {data.location}</p>
//                 <p>Event Capacity: {data.capacity}</p>
//                 <p>Event Created At: {data.createdAt}</p>
//                 <div className="btnmyevent">
//                     <button className='myeventbtn' onClick={() => handleEdit(data)}>Edit</button>
//                     <button className='myeventbtn'>Delete</button>
//                     <button className='myeventbtn' onClick={() => handleViewAttendees(data._id)}>View Attendees</button>
//                 </div>
//             </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Myevnetsorg



// New code for myevents page 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Myevnetsorg = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://event-management-server-9kdv.onrender.com/api/organizers/my-events', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Fetched Events:', response.data); 
        setEvents(response.data.events || []);
      } catch (error) {
        console.error('Failed to fetch events:', error.response?.data || error.message);
      }
    };

    fetchMyEvents();
  }, []);

  // Prevents crashing by handling undefined values
  const filteredEvents = events.filter((data) =>
    (data.type || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (data.location || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (eventData) => {
    navigate('/dashboard/editevent', { state: { event: eventData } });
  };

  const handleViewAttendees = (eventId) => {
    navigate('/dashboard/viewattendees', { state: { eventId } });
  };

  return (
    <div>
      <p className='myevent-heading'>My Events</p>
      <input
        type='text'
        placeholder='Search Event'
        className='searchbar'
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className='event-container'>
        {filteredEvents.length === 0 ? (
          <p>No events found.</p>
        ) : (
          filteredEvents.map((data) => (
            <div key={data._id} className='innermyevent'>
              <h3>{data.type}</h3>
              <p>Event ID: {data._id}</p>
              <p>Event Date: {data.date}</p>
              <p>Event Location: {data.location}</p>
              <p>Event Capacity: {data.capacity}</p>
              <p>Event Created At: {new Date(data.createdAt).toLocaleString()}</p>
              <div className='btnmyevent'>
                <button className='myeventbtn' onClick={() => handleEdit(data)}>Edit</button>
                {/* <button className='myeventbtn'>Delete</button> */}
                <button className='myeventbtn' onClick={() => handleViewAttendees(data._id)}>View Attendees</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Myevnetsorg;
