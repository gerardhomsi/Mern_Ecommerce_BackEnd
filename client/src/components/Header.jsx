import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // const showNavigation = () => (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link" aria-current="page">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  // return <header id="header">{showNavigation()}</header>;
};

export default Header;
