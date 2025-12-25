import React from "react";
import { motion } from "framer-motion";
import "./class-ui.css";

const students = [
  { name: "Amina Yusuf", score: 88, status: "Active" },
  { name: "David John", score: 72, status: "Active" },
  { name: "Sarah Lee", score: 94, status: "Top" },
  { name: "Michael Obi", score: 65, status: "Needs Help" },
];

const lessons = [
  { title: "Introduction to Algebra", progress: 100 },
  { title: "Linear Equations", progress: 70 },
  { title: "Quadratic Functions", progress: 35 },
];

export default function ClassUI() {
  return (
    <motion.div
      className="class-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* HEADER */}
      <motion.div
        className="class-header glow"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1>Mathematics – SS3</h1>
          <p>Class Code: <strong>MT-SS3-204</strong></p>
        </div>

        <div className="teacher-info">
          <div className="avatar">👩‍🏫</div>
          <div>
            <strong>Mrs. Azeez</strong>
            <span>Active Class</span>
          </div>
        </div>
      </motion.div>

      {/* STATS */}
      <section className="class-stats">
        {[
          ["Students", 42],
          ["Lessons", 18],
          ["Assignments", 7],
          ["Avg Score", "84%"],
        ].map((s, i) => (
          <motion.div
            key={i}
            className="stat-card glow"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{s[0]}</h3>
            <p>{s[1]}</p>
          </motion.div>
        ))}
      </section>

      {/* CONTENT */}
      <div className="class-grid">
        {/* STUDENTS */}
        <motion.div
          className="panel glow"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2>Students</h2>
          {students.map((s, i) => (
            <div className="student-row" key={i}>
              <div className="student-avatar">{s.name[0]}</div>
              <div className="student-info">
                <strong>{s.name}</strong>
                <span>Score: {s.score}%</span>
              </div>
              <span className={`badge ${s.status.replace(" ", "")}`}>
                {s.status}
              </span>
            </div>
          ))}
        </motion.div>

        {/* LESSONS */}
        <motion.div
          className="panel glow"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2>Lessons</h2>
          {lessons.map((l, i) => (
            <div key={i} className="lesson-card">
              <div>
                <strong>{l.title}</strong>
                <span>{l.progress}% completed</span>
              </div>
              <div className="progress-bar">
                <div style={{ width: `${l.progress}%` }} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ASSIGNMENTS */}
      <motion.div
        className="panel glow"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2>Assignments</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Due</th>
              <th>Submissions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Algebra Test</td>
              <td>12 Aug</td>
              <td>38 / 42</td>
              <td className="active">Open</td>
            </tr>
            <tr>
              <td>Quadratic Homework</td>
              <td>20 Aug</td>
              <td>30 / 42</td>
              <td className="pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}