import React , {useState} from 'react'
import axios from 'axios';

function Userrequest() {
  const [formData , setFormData]= useState({
    name:'',
    userId:'',
    email:'',
    mobile:'',
    location:"",
    eventName:'',
    eventDate:'',
    eventTime:''
  });
  const handlechange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }; 

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://event-management-server-9kdv.onrender.com/api/requests/", formData);
      alert("Request submitted successfully!");
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to submit request");
    }
  };

  return (
    <div className='request'>
      {/* <p className='top'>User Req Form for an Event</p> */}
        <div className="user_req">
            <form action="" className='reqform' onSubmit={handleSubmit}>
              <p className='top'>User Request Form for an Event</p>
                <input type="text" placeholder='Name' className='req-name' onChange={handlechange} name='name' value={formData.name} required />
                {/* <input type="text" placeholder='Id' className='req-id' onChange={handlechange}  name='userId' value={formData.userId}  required/> */}
                <input type="email" placeholder='Email' className='req-email' onChange={handlechange}  name='email'  value={formData.email} required/>
                <input type="text" placeholder='Mobile Number' className='req-mobile' onChange={handlechange} name='mobile' value={formData.mobile}  required/>
                <input type="text" placeholder='Location' className='req-location' onChange={handlechange}  name='location' value={formData.location}  required/>
                <input type="text" placeholder='Event Title' className='req-event' onChange={handlechange}  name='eventName' value={formData.eventName}  required/>
                <input type="date" placeholder='Event Date' className='req-date' onChange={handlechange}   name='eventDate' value={formData.eventDate} required/>
                <input type="time" placeholder='Event time' className='req-date' onChange={handlechange}   name='eventTime' value={formData.eventTime} required/>
                <div className="okay">
                  <button className='req-btn' type='submit'>	Submit Request</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Userrequest