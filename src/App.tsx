import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/admin/login.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import StudentLog from "./components/student/login.jsx";
import TeacherDashboard from "./components/teacher/TeacherDashboad.jsx";
import StudentDashboard from "./components/student/StudentDashboard.jsx";
import Settings from "./components/setting/setting.jsx";
import ClassUI from "./components/classes/class.jsx";
import AttendanceUI from "./components/attendance/Attendance.jsx";
import GradeDashboard from "./components/grade/GradeDashboard.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/setting" element={ <Settings />} />
        <Route path="/students/login" element={<StudentLog />} />
        <Route path="/class" element={<ClassUI />} />
        <Route path="/attendance" element={<AttendanceUI />} />
        <Route path="/grade" element={<GradeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
