import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footerMain">
                <div className="created"> 
                    Created by: Bohdan Mykytey
                </div>
            </div>
            <div className="footerLinks"> 
                    <a className="button succsess" target="_blank" href="https://github.com/bohdanmykytey"> Githhub </a>
                    <a className="button succsess" target="_blank" href="https://www.linkedin.com/in/bohdanmykytey/"> LinkedIn </a>
                    <a className="button succsess" target="_blank" href=""> Portfolio </a>
            </div>
        </footer>  
    );
  }
}

export default Footer;
