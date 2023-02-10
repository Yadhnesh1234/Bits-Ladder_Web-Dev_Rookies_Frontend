import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Connect
          </a>
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
                  Find Worker
                </a>
              </li>
            </ul>

            <button type="button" class="btn btn-dark mx-2">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
