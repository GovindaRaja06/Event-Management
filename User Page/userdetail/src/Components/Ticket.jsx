import React from 'react'
import { useLocation } from 'react-router-dom';
const Ticket = () => {
    const location = useLocation();
    const form =location.state?.form ;
    if(!form) return <p>No Tickets Founded</p>
  return (
    <div className='ticket'>
      <div className="inner-ticket">
        <h2 className='ticket-heading'>Ticket Confirmation Detail</h2>
        <p className='ticket-content'>Name:{form.name}</p>
        <p className='ticket-content'>Email:{form.email}</p>
        <p className='ticket-content'>Card Number:**** **** **** {form.cardnumber.slice(-4)}</p>
        <p className='ticket-content'>Booking Date:{new Date().toLocaleDateString()}</p>
        <p className='ticket-content'>Ticket Id:{Math.floor(Math.random()*1000000)}</p>
        {/* <p className='ticket-content1'>Your Ticket has been successfully Booked</p> */}
        </div>
        <div className="bottom-ticket">
           <p className='ticket-content1'>Your Ticket has been successfully Booked</p>
           <p className='ticket-content2'>Thank you for your purchase. Enjoy the event!</p>
        </div>
    </div>
  )
}

export default Ticket