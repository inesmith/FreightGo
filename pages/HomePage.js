import React from "react";
import { useNavigate } from "react-router-dom"; // Use navigate for internal routing
import StandardUserNavBar from "../components/StandardUserNavBar";
import TransporterNavBar from "../components/TransporterNavBar";
import Footer from "../components/Footer";
import "./style.css"; // Ensure your CSS path is correct

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookingNavigation = () => {
    navigate("/booking"); // Navigate to booking page
  };

  return (
    <>
      <StandardUserNavBar /> {/* Render the Standard User Navbar */}
      <div className="home-container">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to FreightGo</h1>
            <p>
              <b>Find the best transport solutions for your needs.</b> <br />
              <br />
              At FreightGo, we specialize in fast, reliable, and efficient
              freight solutions tailored to your business needs. <br />
              Whether you need to transport heavy cargo, perishable goods, or
              high-volume loads, <br />
              our fleet and network of trusted carriers are ready to deliver –
              safely and on time.
            </p>
            <button
              className="hero-button"
              onClick={handleBookingNavigation} // Navigate with React Router
            >
              Make a Booking
            </button>
          </div>
        </section>
        <div className="why">
          <p class="why-h">Why Choose Us</p>
          <p>
            <b>Speed & Reliability:</b> We ensure your cargo reaches its
            destination on time, every time. <br />
            <b>Tailored Solutions:</b> From full truckloads to specialized
            transport, we’ve got you covered. <br />
            <b>Real-Time Tracking:</b> Stay in control with live updates on your
            shipment’s journey. <br />
            <b>Multiple Vehicle Options:</b> Select the best trucks to suit your
            cargo needs. <br />
            <b>24/7 Customer Support:</b> We're always here to assist you.
          </p>
        </div>
        <div className="services">
          <p
            className="services-h"
            style={{
              color: "white",
              fontFamily: "'Krona One', sans-serif",
              fontSize: "larger",
            }}
          >
            Our Services
          </p>

          <p>
            Full Truckload (FTL) & Less Than Truckload (LTL) Transport <br />
            Same-Day and Express Delivery <br />
            Cross-Country Freight & Regional Shipping <br />
            Specialized Transport for Agricultural, Industrial, and Consumer
            Goods <br />
            <br />
            <b>Get Moving with FreightGo –</b> Your partner in hassle-free
            freight management.
          </p>
        </div>
      </div>
      <div class="footer-image"></div>
      <Footer /> {/* Add the Footer at the bottom */}
    </>
  );
}

export default HomePage;
