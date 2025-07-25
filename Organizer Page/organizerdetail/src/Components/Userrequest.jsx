import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import userreq from '../DB/Request.json'
import { Link } from 'react-router-dom'

const Userrequest = () => {
   const [requests, setRequests] = useState([]);
    useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/requests/revent'); // Adjust port if needed
        setRequests(response.data);
      } catch (err) {
        console.error('Failed to fetch requests:', err);
      }
    };

    fetchRequests();
  }, []);
  return (
    <div>
        <h2 className='req-heading'>User Request</h2>
        <div className="innerur">
            {requests.map((data,index) => (
                <div key={index} className='req-detail'>
                    <p>User:{data.name}</p>
                    <p>Event Name:{data.eventName}</p>
                    <p>Event Date:{data.eventDate}</p>
                    <p>Event Time:{data.eventTime}</p>
                </div>
            ))}
        </div>
        <Link to="/dashboard">
        <button className='req-btn'>Done</button> 
        </Link>
    </div>
  )
}

export default Userrequest