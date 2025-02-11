import React from "react";
import "./coustom.css";
import { Link } from "react-router-dom";
import Learning from "./login.png";
function Login(){
  return (
    <div className="bg-light d-block rounded border container login">
       <img className="bg-primary login-img" src={Learning} alt="learning" />
       <form className="former form-group" method="post">
          <h3 className="font-weight-bold"><strong>Welcome to Board</strong></h3>
          <p>Student? <Link to="/students/login">Login</Link></p>
          <h4>Sign In</h4>
          <label className="labels" for="username">Username<span className="text-danger">*</span></label>
          <input className="form-control" id="username" type="text" name="username" value="admin.in" /><br/>
          
          <label className="labels" for="password">Password<span className="text-danger">*</span></label>
          <input className="form-control" id="password" type="password" value="admin406" /><br />
          <div className="d-flex justify-content-between">
           <input type="checkbox" />
           <label className="remember"> Remember me </label>
           <Link to="/forget" className="forget">Forget Password</Link>
          </div>
          <Link to="/home" className="btn btn-block btn-primary" >Login</Link>
          <br />
          <span className="center text-secondary">OR</span>
          <div className="other-login">
            <i className="fa fa-google"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
       </form>
    </div>
  );
}
export default Login;