import React from "react";
import logo from "./logo-small.png";
import "./coustom.css";
import Nav from "./mynav.jsx";
import zoom from "./header-icon-04.svg";
import count from "./header-icon-01.svg";
import Administration from "./admin.jsx";
import Progressed from "./progress.jsx";
import logo1 from "./dash-icon-01.svg";
import logo2 from "./dash-icon-02.svg";
import logo3 from "./dash-icon-03.svg";
import logo4 from "./dash-icon-04.svg";
import trackers from "./gfmhavof.png";
import tracker2 from "./3bsee1jg.png";
import Footer from "./footer.jsx";
import Stars from "./studentStar.jsx";
import StudentId from "./studentId.jsx";
import { useNavigate } from "react-router-dom";
function Board(){
  const navigate = useNavigate();
  return(
    <div className="">
      <div className="container-fluid home-nav">
       <div className="justify-content-between d-flex bg-light fixed-top">
          <div className="justify-content-between d-flex">
          <Nav />
          <img src={logo} className="logo" alt="logo" />
          <h4 className="main-board">mainBoard</h4>
          </div>
          <div className="justify-content-between d-flex">
              <div className="zoom-1"><img className="zoom" src={count} alt="country" /></div>
              <div className="zoom-2">
             <i className="fa fa-bell" onClick={ ()=> navigate("/message")}></i>
             </div>
             <div className="zoom-3"><img className="zoom" src={zoom} alt="logo" /></div>
             <Administration />
          </div>
       </div>
    </div>
    <div className="container-fluid home-content">
      <main>
        <div className="d-flex justify-content-between">
           <h3>Welcome Admin!</h3>
           <h5 className="mt-2">Home / Admin</h5>
        </div>
        <div className="tracker">
           <Progressed progress="5055" caption="Students" image={logo1}/>
           <Progressed progress="50+" caption="Award" image={logo2} />
        </div>
        <br/>
        <div className="tracker">
          <Progressed progress="30+" caption="Department" image={logo3} />
          <Progressed progress="$505" caption="Revenue" image={logo4}/>
        </div>
        <div className="w-100 student_track">
           <img src={trackers} alt="Student Trackers" className="w-100" />
        </div>
        <div className="w-100 student_track">
           <img src={tracker2} alt="Student Trackers" className="w-100" />
        </div><br/>
        <div className="star-student">
           <h4>Star Students</h4>
           <StudentId />
        </div>
        <br />
        <Stars />
      </main>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}
export default Board;