import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglesidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-container">
      <div className="hamburger-icon" onClick={togglesidebar}>
        {isOpen ? (
          <span className="close-icon">&times;</span> 
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2 className="side-heading">Organizer's Dashboard</h2>
         <ul className='list-items'>
          {/* <Link className='no-underline' to="/myeventsorg" >
          <li className='sidelist-items'>My events</li>
          </Link>
          <Link to="/createevent" className='no-underline'>
            <li className='sidelist-items'>Create Event</li>
            </Link>
            <Link to="/bookeduser" className='no-underline'>
             <li className='sidelist-items'>Booked Users</li>
             </Link>
             <Link to="/revenue" className='no-underline'>
            <li className='sidelist-items'>Revenue</li>
            </Link>
            <Link to="/userrequest" className='no-underline'>
            <li className='sidelist-items'>Request</li>
            </Link>
            <Link to="/profile" className='no-underline'>
            <li className='sidelist-items'>Profile</li>
            </Link> */}

            <Link className="no-underline" to="/dashboard/myeventsorg"><li className="sidelist-items">My Events</li></Link>
          <Link className="no-underline" to="/dashboard/createevent"><li className="sidelist-items">Create Event</li></Link>
          <Link className="no-underline" to="/dashboard/bookeduser"><li className="sidelist-items">Booked Users</li></Link>
          <Link className="no-underline" to="/dashboard/revenue"><li className="sidelist-items">Revenue</li></Link>
          <Link className="no-underline" to="/dashboard/userrequest"><li className="sidelist-items">Requests</li></Link>
          <Link className="no-underline" to="/dashboard/profile"><li className="sidelist-items">Profile</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
