import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homeheader = () => {
  // const [theme,setTheme] = useState('light');
  const [theme,setTheme]= useState(()=>{
    return localStorage.getItem('theme')||'light';
  });
  useEffect(()=>{
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  },[theme]);
  const toggleTheme = () =>{
    setTheme(prev=>(prev === 'light'?'dark':'light'));
  };

  return (
    <div className='homeheader'>
      <header className='fixed'>
          <div className="image">
            <img src='Brand Image2.jpg' alt='BrandImage' height={90} width={180}  /> 
            <span className='name'>Evoque Events</span>
          </div>
        <nav>
          <Link to="/bookedevents">
            <button className='homeheadbtn'>Booked Events</button>
          </Link>
          <Link to="/requestevent">
            <button className='homeheadbtn'>Request Event</button>
          </Link>
          {/* <Link > */}
            <button className='homeheadbtn' onClick={toggleTheme}>{theme === 'light'?'Dark':'Light'} Mode</button>
          {/* </Link> */}
          <Link to="/help">
            <button className='homeheadbtn'>Help</button> 
          </Link>
          <Link to="/faq">
            <button className='homeheadbtn'>FAQ's</button>
          </Link>
          <Link to="/profile">
            <button className='homeheadbtn'>My Profile </button>
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Homeheader