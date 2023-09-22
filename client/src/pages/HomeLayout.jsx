import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return <div>
    <nav>Hjem layout</nav>
    <Outlet />    
  </div>;
}

export default HomeLayout;