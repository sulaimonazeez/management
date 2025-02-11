import React from "react";
import "./coustom.css";
import Profile from "./1691413082957.jpg";
import Dialog from "./box";
class Administration extends React.Component{
  constructor(props){
    super(props);
    this.state = {isClick: false}
    this.myToggle = this.myToggle.bind(this);
  }
  myToggle (){
    this.setState({isClick: !this.state.isClick});
  }
  render(){
    return (
     <div>
      <div onClick={this.myToggle} className="d-flex justify-content-between container-fluid view">
          <img src={Profile} alt="Admin" className="admin-pic" />
          <div>
             <h4>sulaimon</h4>
             <h5 className="text-primary">Administrator</h5>
          </div>
        </div>
        {this.state.isClick && <Dialog myToggle={this.myToggle}/>}
       </div>
      )
    }
  }
export default Administration;