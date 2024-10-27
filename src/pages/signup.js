import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

import logo from "../Assets/fullLogo.png";
import symbol from "../Assets/Symbol.png";
import "../Styles/login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   navigate("/");
      const user = {
        username: username,
        email: email,
        name: name,
        password: password,
      };
      console.log("Form submitted:", email, username, name, password);
    } catch (error) {
      setError(error.message);
      window.alert(error.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      // Handle Google login logic here
      console.log("Google login");
      navigate("/home");
    } catch (error) {
      setError(error.message);
      window.alert(error.message);
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
        <h1 className="login-title">SIGN UP</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              className="form-input"
              type="password"
              placeholder="Set Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Register
          </button>
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
        <GoogleButton
          onClick={handleGoogleLogin}
          className="g-button"
          type="dark"
        />
        <hr
          style={{
            marginTop: 20,
            backgroundColor: "#51c7c8",
            height: 0.1,
            width: "90%",
            border: "none",
          }}
        />
        <div className="login-footer">
          <Link className="log-text" to="/">
            Already have an account? Sign in
          </Link>
          </div>
      </div>
    </div>
  );
};

export default Signup;
