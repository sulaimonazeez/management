//import logo from './logo.svg';
import './App.css';
import Study from "./components/student.jsx";
import Board from "./components/student/home_board.jsx";
import SettingsProfile from './components/studentProfile.jsx';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from './components/reports.jsx';
import StudentBoard from './components/studentBoard.jsx';
import StudentLog from './components/student/studentLog.jsx';
import UserProfile from './components/profile.jsx';
import StudentMessages from './components/inbox.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Study />} />
        <Route path="/home" element={<Board />} />
        <Route path="/settings" element={<SettingsProfile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/students" element={<StudentBoard />} />
        <Route path="/students/login" element={<StudentLog />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/message" element={<StudentMessages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
