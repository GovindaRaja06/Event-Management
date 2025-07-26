// import React from 'react'
// import { Link } from 'react-router-dom'

// const Signup = () => {
//     return (
//         <div>
//             <div className="signup-form">
//                 <form action="" className='formdetail' >
//                     <input type="text" name='name' placeholder='Full Name'  required  />
//                     <input type="email" name='email' placeholder='Email'  required />
//                     <input type="text" name='mobileno' placeholder='Mobile Number'  required />
//                     <input type="text" name='username' placeholder='User Name'  required />
//                     <input type="password" name='password' placeholder='Password'  required />
//                     <input type="password" name='confrimpassword' placeholder='Confrim Password'   required />
//                     <input type="date" name='dob' placeholder='Date of Birth' required />
//                     <label >
//                         Gender:
//                         <div className="gender-detail">
//                             <label >
//                                 <input type="radio" name='gender'  required /> Male
//                             </label>
//                             <label >
//                                 <input type="radio" name='gender'  required /> Female
//                             </label>
//                             <label >
//                                 <input type="radio" name='gender'  required /> Other
//                             </label>
//                         </div>
//                     </label>
//                     <input type="text " name='location' placeholder='Location'  required />
//                     <label >
//                         <input type="checkbox"  name='termsAcepted'  required />I Agree the Terms and Condition
//                     </label>
//                     <Link to="/">
//                     <button className='signupbtn'>Sign Up</button>
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup   


// Here is the new code for sign up 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//  import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    location: '',
    termsAccepted: false,
    role: 'user' // default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
        email: form.email,
        phone: form.phone,
        username: form.username,
        password: form.password,
        dob: form.dob,
        gender: form.gender,
        location: form.location,
        termsAccepted: form.termsAccepted, 
        role: form.role
      };

      const response = await axios.post('https://event-management-server-9kdv.onrender.com/auth/register', payload);

      // Store token and user info
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("role", response.data.role);

      alert("Signup successful!");
      navigate('/'); // or wherever you want to redirect

    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="signup-form">
      <h2>Create Your Account</h2>
      <form className="formdetail" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
        <input type="date" name="dob" placeholder="Date of Birth" value={form.dob} onChange={handleChange} required />

        <label>Gender:</label>
        <div className="gender-detail">
          <label>
            <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="Other" checked={form.gender === 'Other'} onChange={handleChange} required /> Other
          </label>
        </div>

        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />

        <label>
          <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} required /> I Agree to the Terms and Conditions
        </label>
        <button type="submit" className="signupbtn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
