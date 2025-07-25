import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import bookedData from '../DB/Bookedevents.json'
import axios from 'axios';

const BookingOverview = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/'); // Backend GET route
        setEvent(res.data);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
      }
    };

    fetchBookings();
  }, []);
  return (
    <div>
      <h2 className='bevents-heading'>Booked Users</h2>
      {/* <div className='bevent-container'>
            {event.map((booking) => (
              <div key={booking.bookingId} className="bevent-content">
                <p>Event Title:{booking.eventName}</p>
                <p>Event Id:{booking._id}</p>
                <p>Organizer Name:{booking.organizerName}</p>
                <p>Organizer Id:{booking.organizerId}</p>
                <p>Date:{booking.date}</p>
                <p>Time:{booking.time}</p>
                <p>Location:{booking.location}</p>
                <p>Ticket Type:{booking.ticketType}</p>
                <p>Ticket Count:{booking.ticketCount}</p>
                <p>Total price:{booking.totalPrice}</p>
                <p>Status:{booking.status}</p>
              </div>
            ))}

        </div> */}
      <div className='bevent-container'>
        {event.map((booking) => (
          <div key={booking._id} className="bevent-content">
            {/* From booking document */}
            <p><strong>Booking ID:</strong> {booking._id}</p>
            {/* <p><strong>User ID:</strong> {booking.userId?._id}</p> */}
            <p><strong>User Name:</strong> {booking.userId?.name}</p>
            <p><strong>Booking Label:</strong> {booking.bookingLabel}</p>
            <p><strong>Status:</strong> {booking.bookingStatus}</p>
            <p><strong>Booked At:</strong> {new Date(booking.bookedAt).toLocaleString()}</p>

            {/* From populated eventId */}
            <p><strong>Event ID:</strong> {booking.eventId?._id}</p>
            <p><strong>Event Name:</strong> {booking.eventId?.title}</p>
            <p><strong>Event Type:</strong> {booking.eventId?.type}</p>
            <p><strong>Date:</strong> {booking.eventId?.date}</p>
            <p><strong>Time:</strong> {booking.eventId?.time}</p>
            <p><strong>Location:</strong> {booking.eventId?.location}</p>
            {/* <p><strong>Ticket Price:</strong> ₹{booking.eventId?.ticketPrice}</p> */}
            <p><strong>Total Capacity:</strong> {booking.eventId?.capacity}</p>
            <p><strong>Created At:</strong> {new Date(booking.eventId?.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div>
        <Link to="/dashboard">
          <button className='bevent-button'>Go to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default BookingOverview