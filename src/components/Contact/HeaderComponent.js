import React, { Component } from "react";
import Navbar from "./Navbar";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
            <Navbar />
          {/* <nav className="navbar navbar-expand-md navbar-blue bg-dark">
            <div className="navbar-brand">Contact Application</div>
          </nav> */}
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
