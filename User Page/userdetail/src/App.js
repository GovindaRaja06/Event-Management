// import logo from './logo.svg';
// import Header from './Components/Header';
import Login from './Components/Login';
// import { Navigate } from 'react-router-dom';
import Userrequest from './Components/Userrequest';
import Home from './Components/Home';
import Payment from './Components/Payment';
import Ticket from './Components/Ticket';
// import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'; sometimes cause an error 
import { Routes, Route } from 'react-router-dom';
import Singleevent from './Components/Singleevent';
import Signup from './Components/Signup';
// import Homeheader from './Components/Homeheader';
import './App.css';
import Bookedevents from './Components/Bookedevents';
import Help from './Components/Help';
import Faq from './Components/Faq';
import Profile from './Components/Profile';
// import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Userrequest/> */}
      {/* <Home/> */}
      {/* <Router> */}
      <Routes>
        {/* <Route path="/" element={<Navigate to="/user/login" />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/user/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:id" element={<Singleevent />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path="/requestevent" element={<Userrequest />} />
        <Route path='/bookedevents' element={<Bookedevents />} />
        <Route path='/help' element={<Help />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {/* </Router> */}
      {/* Payment need to connect with above router  */}
      {/* <Payment/> */}
      {/* <Signup/> */}
      {/* HomeHeader Is not needed here because it has been already decleared in the Home file  */}
      {/* <Homeheader/> */}
      {/* <Bookedevents/> */}
      {/* <Help/> */}
      {/* <Faq/> */}
      {/* <Profile/> */}
    </div>
  );
}

export default App;
