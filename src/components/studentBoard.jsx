//import { useState } from "react";
import "./studentBoard.css";
import profiles from "./student/1691413082957.jpg";
import StudentMessages from "./inbox";

export default function StudentBoard() {
  const student = {
    name: "Sulaimon Azeez",
    id: "STU12345",
    grade: "10th Grade",
    attendance: "95%",
    performance: "A",
    profilePic: profiles, // Sample profile image
  };

  const courses = [
    { id: 1, name: "Mathematics", teacher: "Mr. Smith", progress: "85%" },
    { id: 2, name: "Science", teacher: "Mrs. Johnson", progress: "90%" },
    { id: 3, name: "History", teacher: "Mr. Brown", progress: "80%" },
  ];

  return (
    <div className="dashboard-container">
      <main className="mains">
      <header className="dashboard-header">
        <h2>Student Dashboard</h2>
      </header>

      <section className="student-info">
        <div className="student-profile">
          <img src={student.profilePic} alt="Profile" className="profile-pic" />
          <div className="student-details">
            <h3>{student.name}</h3>
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Attendance:</strong> {student.attendance}</p>
            <p><strong>Performance:</strong> {student.performance}</p>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <h3>Enrolled Courses</h3>
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Teacher</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.teacher}</td>
                <td>{course.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      </main>
      <div className="sidebars"><StudentMessages /></div>
    </div>
  );
}
