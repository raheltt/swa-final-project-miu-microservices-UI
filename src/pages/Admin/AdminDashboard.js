// AdminDashboard.js

import React from 'react';
import NavBar from '../../components/NavBar';
import {Outlet} from "react-router-dom";

const AdminDashboard = () => {
  // You can add state and functions here for handling data and interactions

  return (
    
    <div className="admin-dashboard">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
