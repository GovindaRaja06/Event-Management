import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Homeheader from '../Components/Homeheader';
import axios from 'axios'

function Home() {
  const [newEvent, setNewEvent] = useState([])

  useEffect(()=>{
    getEvents()
  },[])

  const getEvents = async () => {
    const eventdetail = await axios.get("https://event-management-server-9kdv.onrender.com/api/events/events")
    if (eventdetail.status !== 200) {
      alert("Something went wrong")
      return
    }
     console.log(eventdetail.data)
      setNewEvent(eventdetail.data)
    }

    return (
      <div className="home_container">
        <Homeheader />
        {newEvent.map((data) => (
          <div key={data.eventId} className="home_card">
            <img
              // src={`Images/events/${data.poster}`}old image of json databse in-build
              src={`https://event-management-server-9kdv.onrender.com${data.imageUrl}`} 
              className="card_image"
              alt={data.eventName} height={100} width={200}
            />
            <div className="home_card_description">
              {/* <h3 className="card_name">{data.eventName}</h3> */}
              <h3 className="card_name">{data.type}</h3>
              {/* if you need the type or title */}
              {/* <p className="card_type">Type: {data.eventType}</p> */}
              <p className="card_date">Date: {data.date}</p>
              <p className="card_time">Time: {data.time}</p>
              <p className="card_location">Location: {data.location}</p>
              <Link to={`/event/${data._id}`}>
              {/* <Link to={`/event/${data._id}`}> */}
                <button className='card_btn'>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default Home