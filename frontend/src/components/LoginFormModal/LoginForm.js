import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    if (!errors) history.push("/dashboard");
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
    return dispatch(sessionActions.demoLogin());
  };

  return (
    <div className="login-container">

        <div id="login-title">Welcome back!</div>

    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      {/* <label> Username or Email */}
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder="Your email address or username"
          className="login-inputs"
          required
        />
      {/* </label>
      <label> Password*/}   
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
          className="login-inputs"
          required
        />
      {/* </label> */}
      <button className="loginFormBtns" type="submit">Log In</button>     
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