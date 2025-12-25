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
import { FaBell, FaBook, FaClipboardList, FaUserCircle } from "react-icons/fa";
import "./StudentDashboard.css";

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

const FullPageStudentDashboard = () => {
  const [assignments] = useState([
    { id: 1, title: "Math Homework", due: "2025-01-30", status: "Pending" },
    { id: 2, title: "Science Project", due: "2025-02-05", status: "Submitted" },
    { id: 3, title: "History Essay", due: "2025-02-10", status: "Pending" },
  ]);

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Attendance %",
        data: [90, 92, 95, 98],
        borderColor: "#00ffff",
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
        data: [45, 35, 10, 5, 5],
        backgroundColor: ["#0ff", "#ff00cc", "#ffcc00", "#00ff77", "#ff5555"],
      },
    ],
  };

  return (
    <div className="fpsd-container">
      {/* Header */}
      <motion.div
        className="fpsd-header-student"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Welcome, Student!</h2>
        <div className="fpsd-header-icons">
          <FaBell size={25} />
          <FaUserCircle size={30} />
          <span className="fpsd-badge">2</span>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div className="fpsd-cards-student">
        {[
          { title: "Attendance Today", value: "98%", icon: <FaClipboardList /> },
          { title: "Current Grade", value: "B+", icon: <FaBook /> },
          { title: "Pending Assignments", value: 2, icon: <FaClipboardList /> },
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
          <h3>Attendance Over Weeks</h3>
          <Line key="lineStudent" data={lineData} />
        </div>
        <div className="fpsd-chart">
          <h3>Grade Distribution</h3>
          <Pie key="pieStudent" data={pieData} />
        </div>
      </motion.div>

      {/* Assignments */}
      <motion.div className="fpsd-table"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h3>Assignments</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.due}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default FullPageStudentDashboard;