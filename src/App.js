// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage"; // Standard user profile page
import TransporterDashboard from "./pages/TransporterDashboard"; // Transporter profile page
import BookingPage from "./pages/BookingPage";
import FreightList from "./components/FreightList";
import TrackingPage from "./pages/TrackingPage";
import PendingTrips from "./pages/PendingTrips";

const ProtectedRoute = ({ children }) => {
  return children; // No login required for now
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/freight-list"
          element={
            <ProtectedRoute>
              <FreightList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/track"
          element={
            <ProtectedRoute>
              <TrackingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pending"
          element={
            <ProtectedRoute>
              <PendingTrips />
            </ProtectedRoute>
          }
        />

        {/* Use TransporterDashboard as the profile page for transporters */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <TransporterDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback to Home if no route matches */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
