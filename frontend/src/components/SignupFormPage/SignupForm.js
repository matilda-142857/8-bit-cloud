import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

import { Redirect, useHistory } from "react-router-dom";
import "../../context/fonts.css";

export default function SignupForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/songs" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    if (!errors) history.push("/songs");    
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    history.push("/songs");
    return dispatch(sessionActions.demoLogin());
  };

  return (
    <div className="login-container">
        <div id="login-title">Sign Up with Us</div>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      {/* <label>
        Email */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="login-inputs"
          required
        />
      {/* </label>
      <label> Username */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Username"
          className="login-inputs"
          required
        />
      {/* </label>
      <label>
        Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
          className="login-inputs"
          required
        />
      {/* </label>
      <label>
        Confirm Password */}
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your Password"
          className="login-inputs"
          required
        />
      {/* </label> */}
      <button className="loginFormBtns" type="submit">Sign Up</button>
    </form>
    <div className="login-or">
        <div className="before-or"></div>
        <div>or</div>
        <div className="after-or"></div>
      </div>

    <form onSubmit={demoSubmit}>
    <button className="loginFormBtns" id="demoBtn" type="submit">
            Log In As A Guest
        </button>
    </form>

    </div>
   
  );
}
