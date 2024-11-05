import React, { useEffect, useState } from "react";
import api from "../axiosInstance"; // Import Axios instance for PHP backend
import StandardUserNavBar from "../components/StandardUserNavBar";
import TransporterNavBar from "../components/TransporterNavBar";
import Footer from "../components/Footer";
import "./style.css"; // Ensure the path to your CSS is correct

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData")); // Retrieve user from localStorage

    if (user) {
      api
        .get(`/profile.php?userId=${user.id}`) // Adjust PHP endpoint
        .then((response) => {
          if (response.data.success) {
            setUserData(response.data.user);
          } else {
            setError("Failed to load profile data.");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
          setError("Failed to load profile data.");
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError("No user logged in.");
    }
  }, []);

  const renderNavBar = () => {
    return userData?.role === "transporter" ? (
      <TransporterNavBar />
    ) : (
      <StandardUserNavBar />
    );
  };

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (error) return <p>{error}</p>; // Show error message

  return (
    <>
      {StandardUserNavBar()}
      <div className="profile-container">
        <div className="profile-card">
          <h1>Profile Page</h1>
          <h2>{`${userData.name} ${userData.surname}`}</h2>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Contact Number:</strong> {userData.contactNumber || "N/A"}
          </p>
          <p>
            <strong>Role:</strong>{" "}
            {userData.role === "transporter" ? "Transporter" : "Standard User"}
          </p>
          <p>
            <strong>Total Bookings:</strong> {userData.bookingsCount || 0}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
