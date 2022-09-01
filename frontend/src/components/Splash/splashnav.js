import React, {useState} from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import './Navigation.css';
import logo from '../Navigation/cloudlogo.png';
import ReactDOM from "react-dom";

import * as sessionActions from '../../store/session';

function SplashNav({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch;
  const history = useHistory;
  const [audioLists, setAudioLists] = useState([]);

  let sessionLinks;
  if (sessionUser) {
    return <Redirect to={"/songs"} />;
  }
    else {
    sessionLinks = (
      <>
        <LoginFormModal id='login-button'/>
        <SignupFormModal id='signup-button'/>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

return (
    <div className="navbar">
      <div id="nav-content">
        <nav id="nav">
          <div id="logo">
            <img id="imgLogo" src={logo} />
            <NavLink id="homeBtn" exact to="/">
              8BITCLOUD
            </NavLink>
            {isLoaded && sessionLinks}
            {/* <ReactJkMusicPlayer/> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default SplashNav;