import React from "react";
import "./coustom.css";
import Learning from "./login.png";
function Login(){
  return (
    <div className="bg-light d-block rounded d-flex border container login">
       <img className="bg-primary w-100" src={Learning} alt="learning" />
       <form className="former form-group" method="post">
          <h3 className="font-weight-bold"><strong>Welcome to Board</strong></h3>
          <p>Need an account? <a href="/create">signup</a></p>
          <h4>Sign In</h4>
          <label className="labels" for="username">Username<span className="text-danger">*</span></label>
          <input className="form-control" id="username" type="text" name="username" value="admin.in" /><br/>
          
          <label className="labels" for="password">Password<span className="text-danger">*</span></label>
          <input className="form-control" id="password" type="password" value="admin406" /><br />
          <div className="d-flex justify-content-between">
           <input type="checkbox" />
           <label className="remember"> Remember me </label>
           <a className="forget" href="/forget">Forget Password</a>
          </div>
          <a className="btn btn-block btn-primary" href="/home" >Login </a>
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