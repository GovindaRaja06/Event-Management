import React ,{useState , useEffect} from 'react'
import axios from 'axios';
// import bevents from '../DB/Bookedevents.json';

const Bookedevents = () => {
  // Initially used use when it is needed 
  // const [bevents , setBevents] = useState([]);
  
  //   useEffect(() => {
  //   axios.get('https://event-management-server-9kdv.onrender.com/api/')
  //     .then(response => {
  //       setBevents(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching booked events:', error);
  //     });
  // }, []);

  // New code
   const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`https://event-management-server-9kdv.onrender.com/api/bookings/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBookings(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching bookings:', err.response?.data || err.message);
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId, token]);

  if (loading) return <p>Loading bookings...</p>;


  return (
    <div className='bookedevents-container'>
        <div className="top-bookedevents">
            <h3 className='top-content'>Details of Booked Events Details</h3>
        </div>
        {bookings.map((newdata) =>(
            <div key={newdata._id} className='bookedevents'>
                {/* <h3>{newdata.eventId.title}</h3> */}
                <h3>User: {newdata.userId.name}</h3>
                <p>EventId: {newdata.eventId._id}</p>
                <p>Event type: {newdata.eventId.type}</p>
                <p>Event Date: {newdata.eventId.date}</p>
                {/* <p>Event Time: {newdata.time}</p> */}
                <p>Event Location: {newdata.eventId.location}</p>
            </div>
        ))}
    </div>
  )
}

export default Bookedevents