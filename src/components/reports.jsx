//import { useState } from "react";
import "./reports.css";

export default function Reports() {
  const reports = [
    { id: 1, title: "Attendance Report", date: "2025-02-11", status: "Completed" },
    { id: 2, title: "Exam Performance Report", date: "2025-02-10", status: "Pending" },
    { id: 3, title: "Fee Payment Report", date: "2025-02-09", status: "Completed" },
  ];

  return (
    <div className="reports-container">
      <h2 className="reports-title">School Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.date}</td>
              <td className={report.status === "Completed" ? "completed" : "pending"}>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
