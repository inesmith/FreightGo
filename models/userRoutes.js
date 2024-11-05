// userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_here";

// userRoutes.js
const User = require("../models/User"); // Adjust path if needed

// Define your signup, login routes, etc.
router.post("/signup", async (req, res) => {
  /* signup logic */
});
router.post("/login", async (req, res) => {
  /* login logic */
});

module.exports = router; // Export the router

router.post("/signup", async (req, res) => {
  const { name, surname, email, password, role, contactNumber } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      role,
      contactNumber,
    });

    // Save user to the database
    await user.save();

    // Create JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error creating user:", error); // Log the error to the console
    res.status(400).json({ error: error.message || "Error creating user" });
  }
});

// userRoutes.js
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Server error during login" });
  }
});
