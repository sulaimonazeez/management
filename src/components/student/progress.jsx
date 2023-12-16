import React from "react";
import "./coustom.css";
function Progressed(props){
  return (
    <div className="d-flex user-board bg-light">
      <div>
        <p>{props.caption}</p>
        <h3>{props.progress}</h3>
      </div>
      <div>
        <img src={props.image} alt="Award" className="std"/>
      </div>
    </div>
  );
}
export default Progressed;