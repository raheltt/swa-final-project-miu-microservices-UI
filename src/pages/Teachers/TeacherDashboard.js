// TeacherDashboard.js

import React from 'react';
import { Outlet } from 'react-router-dom'

import NavBar from '../../components/NavBar';

const TeacherDashboard = () => {
  // You can add state and functions here for handling data and interactions
  const user = {
    role: "teacher"
  }

  return (
    <div className="teacher-dashboard">
      <NavBar user={user} />
      <Outlet />
    </div>
  );
};

export default TeacherDashboard;