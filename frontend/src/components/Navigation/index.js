import React, { useState } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";
import "./Navigation.css";
import logo from "../Navigation/cloudlogo.png";
import ReactDOM from "react-dom";

import * as sessionActions from "../../store/session";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch;
  const history = useHistory;
  const [audioLists, setAudioLists] = useState([]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} className="profile-button" />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal id="login-button" />
        <SignupFormModal id="signup-button" />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  if (sessionUser) {
    return (
      <div className="navbar">
        <div id="nav-content">
          
          <Link className="nav-logo" exact to="/songs">
            <img id="imgLogo" src={logo} />
          </Link>
          <NavLink className="nav-item" id="nav-home" exact to="/songs">
            Home
          </NavLink>
          <NavLink className="nav-item" id="nav-library" exact to="/about">
            About
          </NavLink>
            <div className="nav-search-container">
              <input
                className="nav-search"
                placeholder="Search function coming soon!"
              ></input>
              <button className="nav-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <NavLink className="nav-item" id="nav-upload" to="/upload">
              Upload
            </NavLink>
            <div id="nav-profile">
              {isLoaded && sessionLinks}
              {sessionUser?.username}
           
          </div>
        </div>
      </div>
    );
    // if not logged in
  } else {
    return (
      <div className="navbar">
        <div id="nav-content">
          <Link className="nav-logo" exact to="/songs">
            <img id="imgLogo" src={logo} />
            <div id="txtLogo">8BITCLOUD</div>
          </Link>
          <NavLink className="nav-item" id="nav-home" exact to="/songs">
            Home
          </NavLink>
          <NavLink className="nav-item" id="nav-library" exact to="/about">
            About
          </NavLink>
          <div className="nav-search-container">
            <input
              className="nav-search"
              placeholder="Search function coming soon!"
            ></input>
            <button className="nav-search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* <NavLink className="nav-item" id="nav-upload" to="/upload">
            Upload
          </NavLink> */}
          {/* <div id="nav-profile">{isLoaded && sessionLinks}</div> */}
          <div className="nav-session"> { isLoaded }
            <div className="nav-login">
              <LoginFormModal />
            </div>
            <div id="nav-signup">
              <SignupFormModal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
