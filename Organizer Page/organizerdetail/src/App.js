// import logo from './logo.svg';
// import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup'
// import Homeorg from './Components/Homeorg';
import {Routes,Route} from 'react-router-dom'
import Createevent from './Components/Createevent';
// import Sidebar from './Components/Sidebar';
import './App.css';
import Profile from './Components/Profile';
import Userrequest from './Components/Userrequest';
import Layout from './Components/Layout';
import Revenue from './Components/Revenue';
import BookingOverview from './Components/BookingOverview';
import Myevnetsorg from './Components/Myevnetsorg';
import Editevent from './Components/Editevent';
import Adetail from './Components/Adetail';

// import BookingOverview from './Components/BookingOverview';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Homeorg/>}/>
        <Route path='/createevent' element={<Createevent/>}/>
        <Route path='/myeventsorg' element={<Myevnetsorg/>}/>
        <Route path='/bookeduser' element={<BookingOverview/>}/>
        <Route path='/editevent' element={<Editevent/>}/>
        <Route path='/viewattendees' element={<Adetail/>}/>
        <Route path='/revenue' element={<Revenue/>}/>
        <Route path="/userrequest" element={<Userrequest/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes> */}
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/organizerapp/login" element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      {/* Protected layout after login */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Myevnetsorg />} /> {/* default route after /dashboard */}
        <Route path="myeventsorg" element={<Myevnetsorg />} />
        <Route path="createevent" element={<Createevent />} />
        <Route path="bookeduser" element={<BookingOverview />} />
        <Route path="editevent" element={<Editevent />} />
        <Route path="viewattendees" element={<Adetail />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="userrequest" element={<Userrequest />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
      {/* <Homeorg/> */}
        {/* <Createevent/> */}
      {/* <Sidebar/> */}
      {/* <Myevnetsorg/> */}
      {/* <Editevent/> */}
      {/* <Adetail/> */}
      {/* <BookingOverview/> */}
      {/* <Revenue/> */}
      {/* <Userrequest/> */}
      {/* <Profile/> */}
    </div>
  );
}

export default App;
