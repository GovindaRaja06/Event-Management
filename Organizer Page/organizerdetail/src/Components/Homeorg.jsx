import React from 'react'
import Sidebar from './Sidebar';
import eventdata from '../DB/Eventorg.json';

function Homeorg() {
  return (
    <div >
      <Sidebar/>
      <h2 className='top-name'>Organizer's Page</h2>
      {eventdata.map((org) => (
        <div key={org.organizerId} className='mainclass'>
          <div className="org-container">
          <div className="org-name">
            <h2>{org.organizerName}</h2>
            <button className='org-btn'>Add Events</button>
          </div>
          <div className="added-events">
            <p>Added Events</p>
          </div>
          <div className='event-name'>
          {org.events.slice(0, 4).map((e) => (
            <p key={e.eventId}>
              {e.eventName} - {e.eventType}
            </p>
          ))}
          </div>
          </div>
          {/* <hr /> */}
        </div>
      ))}
    </div>
  );

}

export default Homeorg