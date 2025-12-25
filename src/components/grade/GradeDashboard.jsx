import React from "react";
import "./grade.css";

const grades = [
  { subject: "Mathematics", score: 92 },
  { subject: "English", score: 85 },
  { subject: "Physics", score: 78 },
  { subject: "Chemistry", score: 88 },
  { subject: "Biology", score: 90 },
];

export default function GradeDashboard() {
  const average =
    grades.reduce((a, b) => a + b.score, 0) / grades.length;

  return (
    <div className="grade-page">
      <div className="grade-header">
        <h1>📊 Academic Performance</h1>
        <p>Your grades overview</p>
      </div>

      {/* Overall Card */}
      <div className="grade-summary">
        <div className="grade-circle">
          <svg viewBox="0 0 36 36">
            <path className="bg" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path
              className="progress"
              strokeDasharray={`${average}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span>{average.toFixed(1)}%</span>
        </div>

        <div className="grade-info">
          <h2>Overall Average</h2>
          <p className={average >= 80 ? "good" : "bad"}>
            {average >= 80 ? "Excellent Performance 🚀" : "Needs Improvement ⚠️"}
          </p>
        </div>
      </div>

      {/* Subject Grades */}
      <div className="subject-grades">
        {grades.map((g, i) => (
          <div className="subject-card" key={i}>
            <h3>{g.subject}</h3>
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${g.score}%` }}
              />
            </div>
            <span className="score">{g.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}