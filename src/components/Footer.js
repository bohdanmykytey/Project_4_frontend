import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class Footer extends Component {
  render() {
    return (
        <footer className="row">
            <div className="large-6 columns">
              <p>Created by: Bohdan Mykytey</p>
            </div>
        </footer>  
    );
  }
}

export default Footer;
