import React from 'react';
// import './login.css';f

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>ThoughtWave</h1>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Phone, email, or username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <div className="login-footer">
                    <a href="#">Forgot password?</a>
                    <span>·</span>
                    <a href="#">Sign up for ThoughtWave</a>
                </div>
            </div>
        </div>
    );
};

export default Login;