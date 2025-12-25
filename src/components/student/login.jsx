import React from "react";
import { Link } from "react-router-dom";
import Learning from "../../assets/login.png";
import "./studentlogin.css";

function StudentLog() {
  return (
    <div className="studentlog-page">
      <div className="login-card">
        <div className="login-image-container">
          <img src={Learning} alt="learning" className="login-image" />
        </div>

        <form className="login-form">
          <h2 className="login-title">Welcome to the Board</h2>
          <p className="login-subtitle">
            Admin? <Link to="/">Login</Link>
          </p>

          <div className="form-group">
            <label htmlFor="username">Username <span>*</span></label>
            <input
              id="username"
              type="text"
              name="username"
              defaultValue="student.in"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password <span>*</span></label>
            <input
              id="password"
              type="password"
              defaultValue="student406"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-extra">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forget" className="forget-link">Forget Password?</Link>
          </div>

          <Link to="/students" className="btn-login">Login</Link>

          <div className="or-divider">
            <span>OR</span>
          </div>

          <div className="social-login">
            <i className="fa fa-google"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </form>
      </div>
      <div className="stars-background"></div>
    </div>
  );
}

export default StudentLog;