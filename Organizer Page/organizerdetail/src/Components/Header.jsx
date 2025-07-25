// // import React from 'react'

// // function Header() {
// //   return (
// //     <div className='header'>
// //         <header>
// //             <div className="image">
// //             <img src='Brand Image2.jpg' alt='BrandImage' height={90} width={180}  /> 
// //             <span className='name'>Evoque Events</span>
// //             </div>
// //             <div className="btn">
// //             <button>Login</button>
// //             <button >sign up</button>
// //             <select name="" id="dropdown">
// //               <option value="" disabled selected>Select</option>
// //               <option value="user">User</option>
// //               <option value="organizer">Organizer</option>
// //             </select>
// //             </div>
// //         </header>
// //     </div>
// //   )
// // }

// // export default Header






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // ✅ Import this

// function Header() {
//   const [selectedRole, setSelectedRole] = useState('');
//   const navigate = useNavigate(); // ✅ Hook for navigation

//   const handleRoleChange = (e) => {
//     const role = e.target.value;
//     setSelectedRole(role);

//     // ✅ Redirect based on selection
//     if (role === 'User') {
//       navigate('/userapp'); // ✅ User login route
//     } else if (role === 'Organizer') {
//       navigate('/organizerapp'); // ✅ Organizer login route
//     }
//   };

//   return (
//     <div className='header'>
//       <header>
//         <div className="image">
//           <img src='Brand Image2.jpg' alt='BrandImage' height={90} width={180} />
//           <span className='name'>Evoque Events</span>
//         </div>
//         <div className="btn">
//           <button>{selectedRole ? `${selectedRole}` : 'Unknown User'}</button>
//           <button>Sign up</button>
//           <select
//             name=""
//             id="dropdown"
//             value={selectedRole}
//             onChange={handleRoleChange}
//           >
//             <option value="" disabled>Select</option>
//             <option value="User">User</option>
//             <option value="Organizer">Organizer</option>
//           </select>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Header;




import React, { useState } from 'react';

function Header() {
  const [selectedRole, setSelectedRole] = useState('');
  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);

    // if (role === 'User') {
    //   window.location.href = '/user/login';
    // } else if (role === 'Organizer') {
    //   window.location.href = '/organizer/login';
    // }
    // Secnd copy code
    // if (role === 'User') {
    //   window.location.href = '/userapp/login';
    // } else if (role === 'Organizer') {
    //   window.location.href = '/organizerapp/login';
    // }
    // Third iteration
    if (role === 'User') {
      window.location.href = '/userapp';
    } else if (role === 'Organizer') {
      window.location.href = '/organizerapp';
    }
  };


  return (
    <div className='header'>
      <header>
        <div className="image">
          <img src='Brand Image2.jpg' alt='BrandImage' height={90} width={180} />
          <span className='name'>Evoque Events</span>
        </div>
        <div className="btn">
          <button>{selectedRole ? `${selectedRole}` : 'Unknown User'}</button>
          <button>Sign up</button>
          <select
            name=""
            id="dropdown"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="" disabled>Select</option>
            <option value="User">User</option>
            <option value="Organizer">Organizer</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default Header;
