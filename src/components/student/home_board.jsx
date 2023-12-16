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
import profiles from "./1691413082957.jpg";
import award1 from "./award-icon-01.svg";
import award2 from "./award-icon-02.svg";
import award3 from "./award-icon-03.svg";
import award4 from "./award-icon-04.svg";
function Board(){
  return(
    <div className="">
      <div className="fixed-top container-fluid home-nav">
       <div className="justify-content-between d-flex bg-light fixed-top">
          <div className="justify-content-between d-flex">
          <Nav />
          <img src={logo} className="logo" alt="logo" />
          <h4 className="main-board">mainBoard</h4>
          </div>
          <div className="justify-content-between d-flex">
              <div className="zoom-1"><img className="zoom" src={count} alt="country" /></div>
              <div className="zoom-2">
             <i className="fa fa-bell"></i>
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
           <table className="table">
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Mark</th>
                 <th>Percentage</th>
                 <th>Year</th>
               </tr>
             </thead>
             <tbody>
               <tr className="secondary">
                 <td>PRE209</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>11171</td>
                 <td>97%</td>
                 <td>2013</td>
               </tr>
               <tr className="secondary">
                 <td>PRE2011</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>14171</td>
                 <td>92%</td>
                 <td>2014</td>
               </tr>
               <tr className="secondary">
                 <td>PRE239</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>11110</td>
                 <td>97%</td>
                 <td>2012</td>
               </tr>
               <tr className="secondary">
                 <td>PRE2011</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>10171</td>
                 <td>91%</td>
                 <td>2015</td>
               </tr>
               <tr className="secondary">
                 <td>PRE3p1</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>11171</td>
                 <td>96%</td>
                 <td>2014</td>
               </tr>
               <tr className="secondary">
                 <td>PRE21</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>12171</td>
                 <td>94%</td>
                 <td>2013</td>
               </tr>
               <tr className="secondary">
                 <td>PRE209</td>
                  <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>sulaimon</span></td>
                 <td>1011</td>
                 <td>93%</td>
                 <td>2013</td>
               </tr>
             </tbody>
           </table>
        </div>
        <br />
        <div className="star-student">
           <h4>Star Students</h4>
           <br/>
           <div className="">
              <div className="d-flex">
                 <div className="m">
                   <img className="myaward" src={award1} alt="Award1" />
                   
                   <div className="moved">
                     <p className="myline"><strong>1st Price in chess</strong></p>
                     <p>sulaimon azeez won 1st place</p>
                   </div>
                 </div>
                 <span className="bg-warning">1 Day ago</span>
              </div><br/>
              <div className="d-flex">
                 <div className="m">
                   <img className="myaward" src={award2} alt="Award1" />
                   
                   <div className="moved">
                     <p className="myline"><strong> 1st Price in chess</strong></p>
                     <p>azeez participate in 1st carrom</p>
                   </div>
                 </div>
                 <span className="bg-warning">1 hour ago</span>
              </div><br/>
              <div className="d-flex">
                 <div className="m">
                   <img className="myaward" src={award3} alt="Award1" />
                   
                   <div className="moved">
                     <p className="myline"><strong>1st Price in chess</strong></p>
                     <p>sulaimon azeez won 1st place</p>
                   </div>
                 </div>
                 <span className="bg-warning">1 Day ago</span>
              </div><br/>
              <div className="d-flex">
                 <div className="m">
                   <img className="myaward" src={award4} alt="Award1" />
                   
                   <div className="moved">
                     <p className="myline"><strong>1st Price in chess</strong></p>
                     <p>ola won 1st place in chese</p>
                   </div>
                 </div>
                 <span className="bg-warning">1 week ago</span>
              </div>
           </div>
        </div>
      </main>
    </div>
    </div>
  );
}
export default Board;