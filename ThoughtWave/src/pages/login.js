import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/fullLogo.png";
import symbol from "../Assets/Symbol.png";
import { useUserAuth } from "../Context/userAuthContext";
import "../Styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const { googleSignIn ,logIn} = useUserAuth();


  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await logIn(email,password)
      navigate("/");
    } catch (error) {
      seterror(error.message);
      window.alert(error.message);
    }
  };


  const hanglegooglesignin = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="img-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-box">
        <div className="symbol-container">
          <img className="symbol-png" src={symbol} alt="Thought-Wave" />
        </div>
        <h1 className="login-title">SIGN IN</h1>
        <form className="login-form">
          <div className="input-group">
            <input
              className="form-input"
              type="text"
              placeholder="Phone, email, or username"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button" onClick={handlesubmit}>
            Log In
          </button>
          <div className="login-footer">
            <a className="log-text" href="#">
              Forgot password?
            </a>
            <a className="log-text" href="/signup">
              Sign up for ThoughtWave
            </a>
          </div>
        </form>
        <hr
          style={{
            marginTop: 20,
            backgroundColor: "#51c7c8",
            height: 0.1,
            width: "90%",
            border: "none",
          }}
        />
        <GoogleButton className="g-button" type="dark" onClick={hanglegooglesignin} />
      </div>
    </div>
  );
};

export default Login;
