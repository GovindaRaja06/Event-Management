import React, { useState } from "react";
import axios from "axios";

const Createevent = () => {
    const [form, setForm] = useState({
    eventName: "",
    eventType: "",
    description: "",
    venue: "",
    address: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    ticketPrice: "",
    totalSeats: "",
    bookingDeadline: "",
    termsAccepted: false,
  });
    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/organizerevent/createevent",
        form
      );
      console.log("Created:", res.data);
      alert("Event created successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
  };
  return (
    <div>
        <div className="innerec">
            <h1 className='headingec'>Event Creation Form</h1>
            <form action="" className='formec' onSubmit={handleSubmit}>
                <input type="text" placeholder='Event Name'  name="eventName" value={form.eventName} onChange={handleChange} />
                <select  id="" className='selectec' name="eventType" value={form.eventType} onChange={handleChange} >
                    <option value="" disabled selected>Select Type</option>
                    <option value="music">Music</option>
                    <option value="yoga">Yoga</option>
                    <option value="workshop">Workshop</option>
                    <option value="stand-up-comedy">stand-up-comedy</option>
                    <option value="drama">Drama</option>
                </select>
                <textarea    id="" placeholder='Description' name="description" value={form.description} onChange={handleChange}></textarea>
                <input type="text" placeholder='Venue Name' name="venue" value={form.venue} onChange={handleChange} />
                <input type="text" placeholder='Address' name="address" value={form.address} onChange={handleChange} />
                <input type="text" placeholder='City' name="city" value={form.city} onChange={handleChange} />
                <select  id="" className='selectec' name="state" value={form.state} onChange={handleChange}>
                    <option value="" disabled selected>Select State</option>
                    <option value="tamilnadu">Tamil Nadu</option>
                    <option value="kerala">Kerala</option>
                    <option value="andhra pradesh">Andhra Pradesh</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                </select>
                <label >Start Date
                <input type="datetime-local"   name="startDate" value={form.startDate} onChange={handleChange}  />
                </label>
                <label >End Date
                <input type="datetime-local" name="endDate"   value={form.endDate} onChange={handleChange}/>
                </label>
                <input type="text" placeholder='Ticket Price' name="ticketPrice" value={form.ticketPrice} onChange={handleChange} />
                <input type="text" placeholder='Total Seats' name="totalSeats"  value={form.totalSeats} onChange={handleChange}/>
                <input type="text" placeholder='Booking Deadline' name="bookingDeadline" value={form.bookingDeadline} onChange={handleChange} />
                <label className='checkbox-group'>
                <input type="checkbox"  name="termsAccepted" checked={form.termsAccepted}  onChange={handleChange} />I agree the Terms and Condition 
                </label>
                <button className='btnec'>Create Event</button>
            </form>
        </div>
    </div>
  ) 
}

export default Createevent