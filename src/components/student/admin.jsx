import React from "react";
import "./coustom.css";
import Profile from "./1691413082957.jpg";
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
      <div onClick={this.myToggle} className="d-flex justify-content-between container-fluid">
          <img src={Profile} alt="Admin" className="admin-pic" />
          <div>
             <h4>sulaimon</h4>
             <h5 className="text-primary">Administrator</h5>
          </div>
        </div>
        {this.state.isClick && <div className="container myrelative"><div><button onClick={this.myToggle} className="btn btn-danger"><i className="fa fa-close"></i></button></div><div className="horiz"><img src={Profile} alt="Admin" className="admin-pic"/><div><h4>sulaimon</h4><h5 className="text-primary">Administration</h5></div></div><div className="myhori"><a href="/profile">Profile</a><br/><hr/><a href="/message">Inbox</a><br/><hr/><a href="/logout">Logout</a></div></div>}
       </div>
      )
    }
  }
export default Administration;