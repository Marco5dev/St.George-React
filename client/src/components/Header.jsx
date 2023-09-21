// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"; // Import the useCookies hook

function Header() {
  // Initialize cookies
  const [cookies] = useCookies(["adminName", "isLoggedIn"]);

  // Retrieve values from cookies
  const adminName = cookies.adminName || "";
  const isLoggedIn = cookies.isLoggedIn || false;

  const toggleProfileMenu = () => {
    var menuDiv = document.querySelector(".header .action .profile-menu");
    menuDiv.classList.toggle("active");
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <h1 className="logo">St.George</h1>
        </Link>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link hover-1" data-nav-toggler>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/#recent-post"
                className="navbar-link hover-1"
                data-nav-toggler
              >
                Recent Posts
              </Link>
            </li>

            <li>
              <Link
                to="/#years"
                className="navbar-link hover-1"
                data-nav-toggler
              >
                Years
              </Link>
            </li>

            <li>
              <Link to="/data" className="navbar-link hover-1" data-nav-toggler>
                All Data
              </Link>
            </li>

            <li>
              <div className="all">
                <span className="navbar-link hover-1 dark-mode-text">
                  Toggle Dark Mode
                </span>
                <label className="dark-mode">
                  <input
                    type="checkbox"
                    className="dark-mode-input"
                    id="color_mode2"
                    checked={"darkMode"}
                    onChange={"handleDarkModeChange"}
                  />
                  <span className="dark-mode-slider"></span>
                </label>
              </div>
            </li>

            <li>
              <div className="dropdown">
                <div className="select">
                  <span className="selected">Years</span>
                  <div className="caret"></div>
                </div>
                <ul className="menu">
                  <Link to="/year/2018">
                    <li>2018</li>
                  </Link>
                  <Link to="/year/2019">
                    <li>2019</li>
                  </Link>
                  <Link to="/year/2020">
                    <li>2020</li>
                  </Link>
                  <Link to="/year/2021">
                    <li>2021</li>
                  </Link>
                  <Link to="/year/2022">
                    <li>2022</li>
                  </Link>
                  <Link to="/year/2023">
                    <li>2023</li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>

          <div className="action" style={{ display: "block" }}>
            <div className="profile" onClick={toggleProfileMenu}>
              <img src="/images/blank-photo.png" alt="user" />
            </div>
            <div className="profile-menu">
              <h3>{adminName}</h3>
              {!isLoggedIn ? (
                <ul className="login">
                  <li className="profile-li">
                    <Link to="/dash/login">
                      <i className="fa-solid fa-toolbox"></i> Log in as admin
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="logedin">
                  <li className="profile-li">
                    <Link to={`/dash/edit/user/${adminName}`}>
                      <i className="fa-regular fa-pen-to-square"></i> Edit
                      profile
                    </Link>
                  </li>
                  <li className="profile-li">
                    <Link to="/dash">
                      <i className="fa-solid fa-chart-simple"></i> Dashboard
                    </Link>
                  </li>
                  <li className="profile-li">
                    <Link to="/dash/add/user">
                      <i className="fa-solid fa-plus"></i> Add New User
                    </Link>
                  </li>
                  <li className="profile-li">
                    <Link to="/dash/logout">
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        <div className="theme-container">
          <label className="switch btn-color-mode-switch">
            <input
              type="checkbox"
              name="color_mode"
              id="color_mode"
              value="1"
              checked={"darkMode"}
            />
            <label
              htmlFor="color_mode"
              data-on="Dark"
              data-off="Light"
              className="btn-color-mode-switch-inner"
            ></label>
          </label>
        </div>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
        >
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </header>
  );
}

export default Header;
