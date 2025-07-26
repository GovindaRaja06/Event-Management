import React ,{useState}from 'react'
import  Header from '../Components/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
  const [formdata,setFormdata] = useState({
    email:'',
    password:'',
  });

    const handlechange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const login_user = (e) => {
  //   e.preventDefault();
  //   console.log('Login attempted with:', formdata);
  // };


  //New command 
  
  const handleLogin = async(e) => {
   e.preventDefault(); // prevent default form submission

  try {
    const response = await axios.post('https://event-management-server-9kdv.onrender.com/organizer-auth/login', formdata);

    const { token, organizerId } = response.data;

    // Store token and organizerId in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('organizerId', organizerId);

    alert('Login successful!');
    navigate('/dashboard'); //  redirect to dashboard
  } catch (error) {
    console.error('Login error:', error);
    alert(error.response?.data?.message || 'Login failed');
  }
};
  return (
    <div>
      <Header />
    <div className='login'>
        <div className="input">
          <form action="" className='loginform' onSubmit={handleLogin}>
            <h2 className='heading'>Organizer Login</h2>
        <input type="email" name='email' placeholder='Email' className='email' value={formdata.email} onChange={handlechange} />
        <input type="password" name='password' placeholder='Password' className='password' value={formdata.password} onChange={handlechange}/>
        <div className="submit">
          {/* <Link to="/home"> */}
          {/* <button className='loginbtn' onClick={handleLogin}>Login</button> */}
          <button className='loginbtn' type='submit'>Login</button>
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