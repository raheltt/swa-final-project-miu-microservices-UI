import React from 'react';
import LoginPage from './pages/Auth/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path:"/admin", element: <AdminDashboard />},
  {path: "/login", element: <LoginPage />},
  {path:"/teacher", element:<TeacherDashboard />},
  {path:"/student", element: <StudentDashboard />}
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};


export default App;
