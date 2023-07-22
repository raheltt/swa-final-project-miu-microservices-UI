import React from 'react';
import LoginPage from './pages/Auth/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent/AddStudent';

import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RemoveStudent from './pages/RemoveStudent/RemoveStudent';
import AddSchool from './pages/AddSchool/AddSchool';
import RemoveSchool from './pages/RemoveSchool/RemoveSchool';


const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path:"/admin", element: <AdminDashboard />},
  {path: "/login", element: <LoginPage />},
  {path:"/teacher", element:<TeacherDashboard />},
  {path:"/student", element: <Student/>},
  {path:"/student/add", element: <AddStudent/>},
  {path:"/student/remove", element:<RemoveStudent/>},
  {path:"/school/add", element:<AddSchool/>},
  {path:"/school/remove", element:<RemoveSchool/>}




])

const App = () => {
  return (
    <div>
    <RouterProvider router={router} />
   </div>
  );
};


export default App;
