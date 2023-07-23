// AdminDashboard.js

import React from 'react';
import NavBar from '../../components/NavBar';
import {Outlet} from "react-router-dom";

const AdminDashboard = () => {
  // You can add state and functions here for handling data and interactions
  const user = {role: "admin"}
  return (
    
    <div className="admin-dashboard">
      <NavBar user={user} />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
