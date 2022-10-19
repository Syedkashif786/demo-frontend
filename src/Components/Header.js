import React from 'react';
import { NavLink } from 'react-router-dom';
import "./overview.css";

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}

          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className='heading d-flex fw-bold'>
                <img src="folder.png" alt="folder" />
                <h4>File Preview</h4>

                <li className="nav-item1">
                  <NavLink className="nav-link" to="/">Overview</NavLink>
                </li>

                <li className="nav-item2">
                  <NavLink className="nav-link text-primary" to="/signin ">Sign in </NavLink>
                </li>

                <li className="nav-item3">
                  <NavLink className="nav-link text-primary" to="/register">Register</NavLink>
                </li>

                <li className="nav-item4">
                  <NavLink className="nav-link" to="/manager">File Manager</NavLink>
                </li>
              </div>
            </ul>
            {/* Left links */}
            {/* <div className="d-flex align-items-center">

              <a
                className="btn btn-dark px-3"
                href="https://github.com/Syedkashif786?tab=repositories" target="blank"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </div> */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Header;