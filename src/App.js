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
import ViewRewards from './pages/ViewRewards/ViewRewards';
import AddReward from './pages/AddReward/AddReward';
import UpdateReward from './pages/UpdateReward/UpdateReward';
import RemoveReward from './pages/RemoveReward/RemoveReward';
import RedeaamReward from './pages/RedeemReward/RedeaamReward';


const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path:"/admin", element: <AdminDashboard />},
  {path: "/login", element: <LoginPage />},
  {path:"/teachers", element:<TeacherDashboard />},
  {path:"/students", element: <Student/>},
  {path:"/students/add", element: <AddStudent/>},
  {path:"/students/remove", element:<RemoveStudent/>},
  {path:"/schools/add", element:<AddSchool/>},
  {path:"/schools/remove", element:<RemoveSchool/>},
  {path:"/rewards/view", element:<ViewRewards/>},
  {path:"/rewards/add", element:<AddReward/>},
  {path:"/rewards/remove", element:<RemoveReward/>},
  {path:"/rewards/update", element:<UpdateReward/>},
  {path:"/redeems/reward", element:<RedeaamReward/>}





])

const App = () => {
  return (
    <div>
    <RouterProvider router={router} />
   </div>
  );
};


export default App;
