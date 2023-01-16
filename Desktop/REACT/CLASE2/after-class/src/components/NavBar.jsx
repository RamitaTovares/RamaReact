import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src="/images/logosf2.png" alt="SF" width="55" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="page"
                to={"/category/Vintage"}
              >
                {" "}
                Vintage Design
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="page"
                to={"/category/Iluminacion"}
              >
                Modern Design
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="page"
                to={"/category/Nosotros"}
              >
                Nosotros
              </NavLink>
            </li>
          </ul> 
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-end">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
