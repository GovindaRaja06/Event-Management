// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const OrganizerSignup = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//     termsAccepted: false,
//     role: 'organizer' // default role for organizer
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const payload = {
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         username: form.username,
//         password: form.password,
//         gender: form.gender,
//         termsAccepted: form.termsAccepted,
//         role: form.role
//       };

//       const response = await axios.post('http://localhost:5000/api/organizer/register', payload);

//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("organizerId", response.data.organizerId);
//       localStorage.setItem("role", form.role);

//       alert("Organizer registered successfully!");
//       navigate('/'); // redirect to homepage or login

//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert("Signup failed: " + (error.response?.data?.message || "Server error"));
//     }
//   };

//   return (
//     <div className="signup-form">
//       <h2>Create Organizer Account</h2>
//       <form className="formdetail" onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input type="text" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} required />
//         <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />

//         <label>Gender:</label>
//         <div className="gender-detail">
//           <label>
//             <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} required /> Male
//           </label>
//           <label>
//             <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} required /> Female
//           </label>
//           <label>
//             <input type="radio" name="gender" value="Other" checked={form.gender === 'Other'} onChange={handleChange} required /> Other
//           </label>
//         </div>

//         <label>
//           <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} required /> I Agree to the Terms and Conditions
//         </label>

//         <button type="submit" className="signupbtn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default OrganizerSignup;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrganizerSignup = () => {
  const [form, setForm] = useState({
    name: '',
    organizationName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    bio: ''
    // profileImage: '' // optional
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const payload = {
        name: form.name,
        organizationName: form.organizationName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        bio: form.bio
        // profileImage: form.profileImage
      };

      const response = await axios.post('http://localhost:5000/organizer-auth/register', payload);

      localStorage.setItem("token", response.data.token || '');
      localStorage.setItem("organizerId", response.data.organizerId);

      alert("Organizer registered successfully!");
      navigate('/'); // Redirect to homepage or login
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="signup-form">
      <h2>Create Organizer Account</h2>
      <form className="formdetail" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="organizationName" placeholder="Organization Name" value={form.organizationName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
        <input type="text" name="bio" placeholder="Bio (optional)" value={form.bio} onChange={handleChange} />
        {/* <input type="text" name="profileImage" placeholder="Profile Image Name (optional)" value={form.profileImage} onChange={handleChange} /> */}

        <button type="submit" className="signupbtn">Sign Up</button>
      </form>
    </div>
  );
};

export default OrganizerSignup;
