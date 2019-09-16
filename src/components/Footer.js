import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footerMain">
                <div className="footerColumn">
                    By: Bohdan Mykytey
                </div>
                <div className="footerColumn">
                    @ General Assembly 
                </div>
            </div>
        </footer>  
    );
  }
}

export default Footer;
