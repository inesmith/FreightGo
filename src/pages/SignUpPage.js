import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../axiosInstance"; // Axios for API requests
import "./style.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Choose A User Type",
    contactNumber: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation for matching passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Prepare data to exclude confirmPassword
    const dataToSubmit = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      contactNumber: formData.contactNumber,
    };

    try {
      await api.post("/signup", dataToSubmit); // Ensure this endpoint matches your backend route
      navigate("/login"); // Redirect to login page after successful sign-up
    } catch (error) {
      console.error("Signup error:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 style={{ color: "#2b300b", fontFamily: "'Krona One', sans-serif" }}>
          Sign Up
        </h1>
        <p>Fill in the form below to create your account.</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="auth-input"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surname"
            className="auth-input"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="auth-input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="auth-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            className="auth-input"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div style={{ width: "100%" }}>
            <select
              name="role"
              className="auth-input"
              style={{
                width: "427px",
                padding: "12px",
                margin: "10px 0",
                border: "2px solid #2b300b",
                borderRadius: "5px",
                marginLeft: "-15px",
                boxSizing: "border-box",
                display: "block",
                appearance: "none",
              }}
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Choose A User Type
              </option>
              <option value="standard">Standard User</option>
              <option value="transporter">Transporter</option>
            </select>
          </div>
          <input
            type="tel"
            name="contactNumber"
            className="auth-input"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "underline" }}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
