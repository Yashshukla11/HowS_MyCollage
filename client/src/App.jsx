import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/Signup/Signup.jsx';
import AddPhoto from './components/AddPhoto/AddPhoto.jsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/addphoto" element={<AddPhoto />} /> 
    </Routes>
  );
};

export default App;
