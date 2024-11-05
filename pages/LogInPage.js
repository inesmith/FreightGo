// src/pages/LogInPage.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../axiosInstance"; // Axios for API requests
import "./style.css"; // Ensure your CSS path is correct

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/login", { email, password });

      // Store user details and token in localStorage
      localStorage.setItem("userData", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      localStorage.setItem("userRole", data.user.role); // Store user role for future reference

      // Redirect based on role
      if (data.user.role === "transporter") {
        navigate("/transporter-dashboard"); // Redirect transporter
      } else {
        navigate("/home"); // Redirect standard user to home
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1
          style={{
            color: "#2b300b",
            fontFamily: "'Krona One', sans-serif",
          }}
        >
          Log In
        </h1>
        <p>Welcome back! Please enter your details to log in.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="auth-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don’t have an account yet?{" "}
            <Link to="/signup" style={{ textDecoration: "underline" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
