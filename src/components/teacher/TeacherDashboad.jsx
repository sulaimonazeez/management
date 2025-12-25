import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import "./teacherdashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function TeacherDashboard() {
  const barData = {
    labels: ["Math", "English", "Physics", "Chemistry", "Biology"],
    datasets: [
      {
        label: "Class Performance %",
        data: [78, 85, 69, 90, 82],
      },
    ],
  };

  const attendanceData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [92, 8],
      },
    ],
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        className="sidebar"
      >
        <h2>🌌 EduVerse</h2>
        <nav>
          <Link to="/home">Dashboard</Link>
          <Link to="/class">Classes</Link>
          <Link to="/students">Students</Link>
          <Link to="/attendance">Attendance</Link>
          <Link to="#">Assignments</Link>
          <Link to="#">Analytics</Link>
          <Link to="#">Messages</Link>
          <Link to="/setting">Settings</Link>
        </nav>
      </motion.aside>

      {/* MAIN */}
      <main className="main">
        {/* TOP BAR */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="topbar"
        >
          <h1>Teacher Dashboard</h1>
          <div className="profile">
            <span>👩‍🏫 Mrs. Azeez</span>
          </div>
        </motion.header>

        {/* STATS */}
        <section className="stats">
          {[
            ["Classes", 6],
            ["Students", 184],
            ["Assignments", 12],
            ["Attendance %", "92%"],
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card glow"
            >
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </motion.div>
          ))}
        </section>

        {/* CONTENT */}
        <section className="content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel"
          >
            <h3>Class Performance</h3>
            <Bar data={barData} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel"
          >
            <h3>Attendance</h3>
            <Doughnut data={attendanceData} />
          </motion.div>
        </section>

        {/* STUDENTS */}
        <section className="panel">
          <h3>Students Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Performance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {["John", "Amina", "David", "Sarah"].map((s, i) => (
                <tr key={i}>
                  <td>{s}</td>
                  <td>SS3</td>
                  <td>{70 + i * 5}%</td>
                  <td className="active">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}