import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class Footer extends Component {
  render() {
    return (
        <div className="Footer">   
            <div className="wrap row">
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
            </div>
        </div>  
    );
  }
}

export default Footer;
