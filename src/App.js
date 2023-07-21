import React from 'react';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';



const App = () => {
  return (
    <div>
    <div className="app">
      <LoginPage />
    </div>,
    <div className="app">
    <AdminDashboard />
  </div>,
   <div className="app">
   <TeacherDashboard />
 </div>,
     <div className="app">
     <StudentDashboard />
   </div>
   </div>
  );
};


export default App;
