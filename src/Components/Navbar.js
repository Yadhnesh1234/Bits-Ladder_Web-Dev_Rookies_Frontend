import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Connect
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Find Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Post Work
                </a>
              </li>
            </ul>
            <NavLink to="/signin">
              <button type="button" className="btn btn-dark mx-2">
                Login
              </button>
            </NavLink>
            <NavLink to="/notification">
              <button type="button" class="btn btn-outline-dark mx-2">
                🔔
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
