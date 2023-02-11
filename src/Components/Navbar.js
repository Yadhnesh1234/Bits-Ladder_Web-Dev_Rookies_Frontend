import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedInStatus")) {
      setLoggedInStatus(true);
    } else {
      setLoggedInStatus(false);
    }
  }, []);

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
              <NavLink to="/post-work" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Post Work
                  </a>
                </li>
              </NavLink>
            </ul>
            <div>
              <NavLink to="/client/signin">
                <button
                  type="button"
                  class="btn btn-dark mx-2"
                  style={
                    loggedInStatus ? { display: "none" } : { display: "block" }
                  }
                >
                  Login
                </button>
              </NavLink>
            </div>
            <NavLink to="/notifications">
              <button
                type="button"
                class="btn btn-outline-dark mx-2"
                style={
                  loggedInStatus ? { display: "block" } : { display: "none" }
                }
              >
                🔔
              </button>
            </NavLink>

            <NavLink to="/client/dashboard">
              <button
                type="button"
                class="btn btn-outline-dark mx-2"
                style={
                  loggedInStatus ? { display: "block" } : { display: "none" }
                }
              >
                🤵
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
