import React from "react";
import { NavHashLink } from "react-router-hash-link";

function Navigation() {
  return (
		<div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavHashLink className="navbar-brand col-2" to="/">
            Alan Cheng
          </NavHashLink>
          <div className="col-8">
            <ul className="navbar-nav mx-auto justify-content-center">
              <li className="nav-item">
                <NavHashLink className="nav-link" to="/shorts">
                  Short Films
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink className="nav-link" to="/skits">
                  Comedy Skits
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink className="nav-link" to="/extras">
                  Extras
                </NavHashLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;