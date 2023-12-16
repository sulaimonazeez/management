import logo from './logo.svg';
import './App.css';
import Study from "./components/student.jsx";
import Board from "./components/student/home_board.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Study />} />
        <Route path="/home" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
