import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import './Navigation.css';
import logo from '../Navigation/cloudlogo.png';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch;
  const history = useHistory;

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} className='profile-button' />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal id='login-button'/>
        <SignupFormModal id='signup-button'/>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

//   return (
//     <ul>
//       <li>
//         <NavLink exact to="/">Home</NavLink>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }
return (
    <div className="navbar">
      <div id="nav-content">
        <nav id="nav">
          <div id="logo">
            <img id="imgLogo" src={logo} />
            <NavLink id="homeBtn" exact to="/dashboard">
              8BITCLOUD
            </NavLink>
            <NavLink id="nav-home" exact to="/songs">
              Home
            </NavLink>
            <NavLink id="nav-library" exact to="/library">
              Library
            </NavLink>
            <div className="nav-search-container">
              <input className="nav-search" placeholder="Search..."></input>
              <button className="nav-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <NavLink id="nav-upload" to="/upload">
              Upload
            </NavLink>
            <div id="nav-profile">
              {isLoaded && sessionLinks}
              {sessionUser?.username}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navigation;