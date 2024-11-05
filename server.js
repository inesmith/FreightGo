const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { authenticateToken, authorizeRole } = require("./middleware/auth");
const freightRouter = require("./routes/freightRoutes");
const userRoutes = require("./routes/userRoutes"); // Import user routes
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Use user routes for user-related endpoints
app.use("/auth", userRoutes);

// Routes for freight, protected by authentication middleware
app.use("/api/freight", authenticateToken, freightRouter);

// Protected route examples:
app.get(
  "/api/standard",
  authenticateToken,
  authorizeRole("standard"),
  (req, res) => {
    res.send("Welcome, standard user!");
  }
);

app.get(
  "/api/transporter",
  authenticateToken,
  authorizeRole("transporter"),
  (req, res) => {
    res.send("Welcome, transporter!");
  }
);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
