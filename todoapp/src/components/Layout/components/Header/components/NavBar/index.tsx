import React, { useContext, FC } from "react";
import { Bell, ArrowLeft, Grid3x3GapFill, Gear, BoxArrowRight, Search } from "react-bootstrap-icons";
import { useHistory, Link } from "react-router-dom";

import menuItems from "./data";
import { useAuth } from '../../../../../../hooks'
import { AuthContext } from "../../../../../../contexts/AuthProvider"


const NavBar: FC = () => {
  const { goBack } = useHistory();
  const { logout } = useAuth();
  const { user } = useContext(AuthContext)


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 me-3">
            <li>
              <button className="btn" onClick={goBack}>
                <ArrowLeft />
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <Search />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="btn btn-primary shadow" type="submit">
                Search
              </button>
            </div>

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
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {menuItems.map(({ href, text, className }) => {
                  return (
                    <li key={text} className={`dropdown-item ${className}`}>
                      <a href={href}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Bell />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Grid3x3GapFill />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Gear />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.photoURL}
                  alt="user-avatar"
                  width="32"
                  className="rounded-circle ms-1 me-2"
                />
                {console.log(user.photoURL)}
                {user.displayName}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={logout}>
                    <BoxArrowRight /> logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
