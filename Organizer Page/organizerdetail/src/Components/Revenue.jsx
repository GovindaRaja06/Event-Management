import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import revenue from '../DB/Revenue.json'

const Revenue = () => {
  const [revenueData, setRevenueData] = useState([]);
  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/revenue');
        setRevenueData(response.data);
      } catch (err) {
        console.error('Error fetching revenue:', err);
      }
    };

    fetchRevenue();
  }, []);
  return (
    <div>
      <h2 className='r-heading'>Revenue Details </h2>
      <div className="revenue-container">

        {revenueData.map((data) => (
          <div key={data.eventId} className='r-detail'>
            <div className='r-name'>
              <p>Event Name</p>
              <p>{data.eventId?.title || 'N/A'}</p>
            </div>
            <div className='r-revenue'>
              <p>Total Revenue</p>
              <p>₹{data.totalRevenue}</p>
            </div>
            <div className='r-ticket'>
              <p>Tickets Sold</p>
              <p>{data.ticketSold}</p>
            </div>
            <div className='r-payment'>
              <p>Payment Method</p>
              <p>{data.paymentMethod}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Revenue