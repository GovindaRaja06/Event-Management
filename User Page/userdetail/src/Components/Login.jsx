import React, { useState, useEffect } from 'react'
// import Userlogin from '../DB/Userlogin.json';
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });

  // activating light theme 
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
  }, []);

  const handlechange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login_user = async (e) => {
    // e.preventDefault();
    // console.log('Login attempted with:', formdata);
    e.preventDefault();
    // below is try catch
    try {
      const res = await axios.post('https://event-management-server-9kdv.onrender.com5000/auth/login', formdata);

      // Save JWT token and user info
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('role', res.data.role);

      // Verify token after login
      const verifyRes = await axios.get('https://event-management-server-9kdv.onrender.com/api/users/verify', {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });

      console.log('Token verified, user:', verifyRes.data.user);

      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error.response?.data);
      alert(error.response?.data?.message || 'Login failed');
    }
  };


  return (
    <div>
      <Header />
      <div className='login'>
        <div className="input">
          <form action="#" className='loginform' onSubmit={login_user}>
            <h2 className='heading'>User Login</h2>
            <input type="email" name='email' placeholder='Email' className='email' value={formdata.email} onChange={handlechange} />
            <input type="password" name='password' placeholder='Password' className='password' value={formdata.password} onChange={handlechange} />
            <div className="submit">
              {/* <Link to="/home"> */}
              {/* <Link to={formdata.email && formdata.password ? "/home" : "#"}> */}
              <div>
                <button className='loginbtn' type='submit'>Login</button>
                </div>
              {/* </Link> */}
            </div>

            <p className='new'>Don't Have an account?
              <Link to="/signup">
                <button className='loginbtn'>Sign up</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login