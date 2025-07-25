// New code down
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Editevent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const event = state?.event;

  const [formData, setFormData] = useState({
      id: event?._id || '',
    title: event?.title || '',
    date: event?.date || '',
    location: event?.location || '',
    capacity: event?.capacity || '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:5000/api/events/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` // optional, if required
      },
      body: JSON.stringify({
        title: formData.title,
        date: formData.date,
        location: formData.location,
        capacity: formData.capacity
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update event');
    }

    const data = await response.json();
    console.log('Event updated:', data);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/dashboard'); // or '/myeventsorg'
    }, 1500);

  } catch (err) {
    console.error('Update error:', err.message);
    alert('Update failed: ' + err.message);
  }
};


  return (
    <div className="edit-container">
      <h2 className='event-heading'>Edit Event</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-edit">
        <label>Title</label>
        <input name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-edit">
        <label>Date</label>
        <input name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-edit">
        <label>Location</label>
        <input name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div className="form-edit">
        <label>Capacity</label>
        <input name="capacity" value={formData.capacity} onChange={handleChange} />
        </div>

        <button type="submit" className='editbtn'>Save Changes</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Edited Successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Editevent;
