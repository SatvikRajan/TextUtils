import React from "react";
import PropTypes from "prop-types";
import './Dark.css'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/#">
          {props.title}
        </Link>
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div
        className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
          }`}
      >
        <div class="toggleWrapper">
          <input className="dn"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode} />
          <label htmlFor="flexSwitchCheckDefault" class="toggle">
            <span class="toggle__handler">
              <span class="crater crater--1"></span>
              <span class="crater crater--2"></span>
              <span class="crater crater--3"></span>
            </span>
            <span class="star star--1"></span>
            <span class="star star--2"></span>
            <span class="star star--3"></span>
            <span class="star star--4"></span>
            <span class="star star--5"></span>
            <span class="star star--6"></span>
          </label>
        </div>
      </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
