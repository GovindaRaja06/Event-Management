// import React from 'react'
// import Sidebar from './Sidebar'
// import { Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <div>
//         <Sidebar/>
//         <div className="inner-layout">
//             <Outlet/>
//         </div>
        
//     </div>
//   )
// }

// export default Layout
// Components/Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;