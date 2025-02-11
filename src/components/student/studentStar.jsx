import React from "react";
import award1 from "./award-icon-01.svg";
import award2 from "./award-icon-02.svg";
import award3 from "./award-icon-03.svg";
import award4 from "./award-icon-04.svg";
const Stars = () => {
    return (
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
    )
}

export default Stars;