import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class NavBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text"> Whats Your Favorite Movie? </li>
            <li>
              <NavLink to="/"> Landing Page </NavLink>
            </li>
            <li>
              <NavLink to="/favorites"> Favorite Movies </NavLink>
            </li>
            <li>
              <NavLink to="/users"> Your Movies </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
