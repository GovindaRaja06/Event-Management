// import React ,{useState} from 'react'

// const Profile = () => {
//     const [profileData,setProfileData] = useState({
//         name:"Tom cruise",
//         email:"tomc@gmail.com",
//         image:"Tom cruise.jpeg",
//         phone:'1234567890',
//     });
//   return (
//     <div className='profile-container'>
//         <h3 className='myprofile'>My Profile</h3>
//         <img src={`Images/Events/${profileData.image}`} alt="Profile" className='profilepic' />
//         <p className='profiledetail'>Name:{profileData.name}</p>
//         <p className='profiledetail'>Email:{profileData.email}</p>
//         <p className='profiledetail'>phone:{profileData.phone}</p>
//         <button className='profilebtn'>Logout</button>
//     </div>
//   )
// }

// export default Profile


// Full working code below but with header
// import React, { useEffect, useState } from 'react';
// import Header from '../Components/Header';
// import axios from 'axios';

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem('token');
//       const userId = localStorage.getItem('userId');

//       try {
//         const res = await axios.get(`https://event-management-server-9kdv.onrender.com/api/users/profile/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         // Set the fetched user data
//         setProfileData({
//           name: res.data.name,
//           email: res.data.email,
//           phone: res.data.phone,
//           image: 'Tom cruise.jpeg' // You can replace this dynamically if needed
//         });
//       } catch (error) {
//         console.error("Failed to fetch profile", error.response?.data || error.message);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = '/login'; // redirect to login
//   };

//   return (
//     <div>
//       <Header />
//       <div className='profile-container'>
//         <h3 className='myprofile'>My Profile</h3>
//         {profileData ? (
//           <>
//             <img
//               src={`Images/Events/${profileData.image}`}
//               alt="Profile"
//               className='profilepic'
//             />
//             <p className='profiledetail'>Name: {profileData.name}</p>
//             <p className='profiledetail'>Email: {profileData.email}</p>
//             <p className='profiledetail'>Phone: {profileData.phone}</p>
//             <button className='profilebtn' onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <p>Loading profile...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// New code for profile without header
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      try {
        const res = await axios.get(`https://event-management-server-9kdv.onrender.com/api/users/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setProfileData({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          image: 'Tom cruise.jpeg' //need to be  dynamic
        });
      } catch (error) {
        console.error("Failed to fetch profile", error.response?.data || error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/'; // Redirect after logout
  };

  return (
    <div className='profile-container'>
      <h3 className='myprofile'>My Profile</h3>
      {profileData ? (
        <>
          <img
            src={`Images/Events/${profileData.image}`}
            alt="Profile"
            className='profilepic'
          />
          <p className='profiledetail'>Name: {profileData.name}</p>
          <p className='profiledetail'>Email: {profileData.email}</p>
          <p className='profiledetail'>Phone: {profileData.phone}</p>
          <button className='profilebtn' onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
