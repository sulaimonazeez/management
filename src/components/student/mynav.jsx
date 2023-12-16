import React from "react";
import "./coustom.css";
class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {isShow: false}
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState({isShow:!this.state.isShow})
  }
  render(){
    return (
      <div className="nav-container">
        <a onClick={this.toggle} className="mynav" href="#"><i className="fa fa-bars"></i></a>
        
        {this.state.isShow && <div className="nav-detail"><a href="/home">Home</a></div>}
      </div>
    );
  }
}

export default Nav;