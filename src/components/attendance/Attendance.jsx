import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Attendance.css";

const initialStudents = [
  { id: 1, name: "Amina Yusuf", status: "present" },
  { id: 2, name: "David John", status: "present" },
  { id: 3, name: "Sarah Lee", status: "late" },
  { id: 4, name: "Michael Obi", status: "absent" },
  { id: 5, name: "Zainab Bello", status: "present" },
];

export default function AttendanceUI() {
  const [students, setStudents] = useState(initialStudents);

  const updateStatus = (id, status) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const count = (type) =>
    students.filter((s) => s.status === type).length;

  const percentage = Math.round(
    (count("present") / students.length) * 100
  );

  return (
    <motion.div
      className="attendance-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* HEADER */}
      <div className="attendance-header glow">
        <div>
          <h1>Attendance</h1>
          <p>Mathematics – SS3</p>
        </div>

        <input type="date" className="date-picker" />
      </div>

      {/* SUMMARY */}
      <section className="summary">
        <motion.div className="summary-card glow" whileHover={{ scale: 1.05 }}>
          <h3>Present</h3>
          <p className="present">{count("present")}</p>
        </motion.div>

        <motion.div className="summary-card glow" whileHover={{ scale: 1.05 }}>
          <h3>Late</h3>
          <p className="late">{count("late")}</p>
        </motion.div>

        <motion.div className="summary-card glow" whileHover={{ scale: 1.05 }}>
          <h3>Absent</h3>
          <p className="absent">{count("absent")}</p>
        </motion.div>

        <motion.div className="summary-card ring glow">
          <svg id="svg" viewBox="0 0 36 36">
            <path
              className="bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="progress"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span>{percentage}%</span>
        </motion.div>
      </section>

      {/* STUDENT LIST */}
      <div className="panel glow">
        <h2>Mark Attendance</h2>

        {students.map((s) => (
          <motion.div
            key={s.id}
            className="student-row"
            whileHover={{ scale: 1.02 }}
          >
            <div className="student-avatar">{s.name[0]}</div>

            <div className="student-info">
              <strong>{s.name}</strong>
              <span className={`tag ${s.status}`}>{s.status}</span>
            </div>

            <div className="actions">
              <button
                className="present-btn"
                onClick={() => updateStatus(s.id, "present")}
              >
                ✓
              </button>
              <button
                className="late-btn"
                onClick={() => updateStatus(s.id, "late")}
              >
                ⏱
              </button>
              <button
                className="absent-btn"
                onClick={() => updateStatus(s.id, "absent")}
              >
                ✕
              </button>
            </div>
          </motion.div>
        ))}

        <button className="save-btn glow">Save Attendance</button>
      </div>
    </motion.div>
  );
}