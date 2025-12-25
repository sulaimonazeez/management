import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaBell } from "react-icons/fa";
import "./AdminDashboard.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const FullPageSchoolDashboard = () => {
  const [students] = useState([
    { id: 1, name: "John Doe", grade: "A", attendance: "Present" },
    { id: 2, name: "Jane Smith", grade: "B", attendance: "Absent" },
    { id: 3, name: "Alex Johnson", grade: "C", attendance: "Present" },
  ]);

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance",
        data: [95, 92, 96, 90, 98],
        borderColor: "#0ff",
        backgroundColor: "rgba(0,255,255,0.2)",
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        label: "Grades",
        data: [50, 30, 10, 5, 5],
        backgroundColor: ["#0ff", "#ff00cc", "#ffcc00", "#00ff77", "#ff5555"],
      },
    ],
  };

  return (
    <div className="fpsd-container">
      {/* Sidebar */}
      <motion.div
        className="fpsd-sidebar"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
      >
        <h2 className="fpsd-logo">SchoolSys</h2>
        <ul>
          <li><Link to="/students/"><FaUserGraduate /> Students</Link></li>
          <li><Link to="/teacher"><FaChalkboardTeacher /> Teachers</Link></li>
          <li><Link to="/class"><FaSchool /> Classes</Link></li>
          <li><Link to="/attendance"><FaBell /> Attendance</Link></li>
          <li><Link to="/grade">Grades</Link></li>
          <li><Link to="/setting">Settings</Link></li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="fpsd-main">
        <motion.div
          className="fpsd-header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Dashboard</h1>
          <div className="fpsd-notifications">
            <FaBell size={25} />
            <span className="fpsd-badge">3</span>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div className="fpsd-cards">
          {[
            { title: "Total Students", value: 120, icon: <FaUserGraduate /> },
            { title: "Total Teachers", value: 20, icon: <FaChalkboardTeacher /> },
            { title: "Active Classes", value: 12, icon: <FaSchool /> },
            { title: "Attendance Today", value: 110, icon: <FaBell /> },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="fpsd-card"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="fpsd-card-icon">{card.icon}</div>
              <div>
                <h3>{card.value}</h3>
                <p>{card.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <motion.div className="fpsd-charts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="fpsd-chart">
            <h3>Attendance Over Time</h3>
            <Line key="line1" data={lineData} />
          </div>
          <div className="fpsd-chart">
            <h3>Grade Distribution</h3>
            <Pie key="pie1" data={pieData} />
          </div>
        </motion.div>

        {/* Students Table */}
        <motion.div className="fpsd-table"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h3>Student Records</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.grade}</td>
                  <td>{s.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default FullPageSchoolDashboard;