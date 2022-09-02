import React, {useState} from 'react';
import { NavLink, useHistory, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import './splash.css';
import logo from './8blogo.png';
import ReactDOM from "react-dom";

import * as sessionActions from '../../store/session';

function SplashNav({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch;
  const history = useHistory;
  const [audioLists, setAudioLists] = useState([]);

  if (sessionUser != undefined) {
    return <Redirect to={"/songs"} />;
  }

return (
    <div className="splashnav">
      <div className="splashnav-content">
            <img id="splashlogo" src={logo} />
            <div id="splashnavbuttons">
                <LoginFormModal/>
                <SignupFormModal/>
            </div>
      </div>
    </div>
  );
}
export default SplashNav;