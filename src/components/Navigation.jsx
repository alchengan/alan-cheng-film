import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
		<div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand col-2" to="/alan-cheng-film">
            Alan Cheng
          </NavLink>
          <div className="col-8">
            <ul className="navbar-nav mx-auto justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/alan-cheng-film/shorts">
                  Short Films
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/alan-cheng-film/skits">
                  Comedy Skits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/alan-cheng-film/extras">
                  Extras
                </NavLink>
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