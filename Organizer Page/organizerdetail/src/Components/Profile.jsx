// import React ,{useState} from 'react'

// const Profile = () => {
//   const [profileData , setProfileData] = useState({
//         name:"Raja_AG",
//         email:"Raja@gmail.com",
//         image:"Raja New3.jpg",
//         phone:'1234567890',
//   })
//   return (
//     <div className='profile-container'>
//         <div className="inner-profile">
//           <img src={`/${profileData.image}`} alt="Profile" height={200} width={200} className="profile-pic" />
//             <p className='profile-detail'>Name:{profileData.name}</p>
//             <p className='profile-detail'>Email:{profileData.email}</p>
//             <p className='profile-detail'>Mobile No:{profileData.phone}</p>
//         </div>
//     </div>
//   )
// }

// export default Profile
// Above is the static code 




// New dynamic profile generation for the organizer 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const organizerId = localStorage.getItem('organizerId');
      const token = localStorage.getItem('token');

      if (!organizerId) {
        console.error('Organizer ID not found in localStorage');
        return;
      }

      try {
        const response = await axios.get(`https://event-management-server-9kdv.onrender.com/api/organizer/${organizerId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setProfileData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          image: "Raja New3.jpg"
        });
      } catch (error) {
        console.error('Failed to fetch organizer profile:', error.response?.data || error.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className='profile-container'>
      {/* <h2 className='profile-title'>Organizer Profile</h2> */}
      {profileData ? (
        <div className='inner-profile'>
          <img
            src={`/${profileData.image}`} 
            alt="Profile"
            height={200}
            width={200}
            className='profile-pic'
          />
          <p className='profile-detail'>Name: {profileData.name}</p>
          <p className='profile-detail'>Email: {profileData.email}</p>
          <p className='profile-detail'>Mobile No: {profileData.phone}</p>
        </div>
      ) : ( 
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
