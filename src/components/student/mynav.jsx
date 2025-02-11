import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./slidebar.css";
//import logo from "./logo.png"; 
import { FaHome, FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      
      <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      <div className="sidebar-header">
        {isOpen && (<h3>MainBoard</h3>)}
      </div>

      <ul className="sidebar-menu">
        <li>
          <Link to="/home">
            <FaHome className="icon" /> {isOpen && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/students">
            <FaUsers className="icon" /> {isOpen && "Students"}
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <FaChartBar className="icon" /> {isOpen && "Reports"}
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog className="icon" /> {isOpen && "Settings"}
          </Link>
        </li>
        <li className="logout">
          <Link to="/logout">
            <FaSignOutAlt className="icon" /> {isOpen && "Logout"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
