import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style.css'; // Ensure the path to your CSS is correct
import StandardUserNavBar from '../components/StandardUserNavBar';
import Footer from '../components/Footer';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    truckType: '',
    pickupLocation: '',
    dropOffLocation: '',
    date: '',
    additionalInfo: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      await createBooking(formData); // Call the backend to submit the booking
      console.log('Booking Submitted:', formData);

      // Navigate to the tracking page on success
      navigate('/track');
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const createBooking = async (bookingData) => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <StandardUserNavBar />
      <div className="booking-page">
        <div className="booking-container">
          <h1>Book a Collection</h1>
          <form className="booking-form" onSubmit={handleSubmit}>
            {/* Form Inputs */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Full Name'
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Email'
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                placeholder='Contact Number'
              />
            </div>

            <div className="form-group">
              <select
                name="truckType"
                value={formData.truckType}
                onChange={handleChange}
                required
                placeholder='Truck Type'
              >
                <option value="">Select a truck type</option>
                <option>Flatbed Truck</option>
                <option>Box Truck</option>
                <option>Dump Truck</option>
                <option>Semi Trailer</option>
                <option>Refrigerated Truck</option>
                <option>Crane Truck</option>
                <option>Tanker Truck</option>
                <option>Tow Truck</option>
                <option>Cattle Truck</option>
                <option>Concrete Mixer</option>
                <option>Pickup Truck</option>
                <option>Jumbo</option>
                <option>Logging Truck</option>
                <option>Straight Truck</option>
                <option>Cement Truck</option>
                <option>Garbage Truck</option>
                <option>Light Truck</option>
                <option>Rigid Truck</option>
                <option>Fire Truck</option>
                <option>Heavy Truck</option>
                <option>Tank Truck</option>
                <option>Medium Truck</option>
                <option>Side Tipper</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
                placeholder='Pickup Location'
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
                required
                placeholder='Drop-off Location'
              />
            </div>

            <div className="form-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                placeholder='Pickup Date'
              />
            </div>

            <div className="form-group">
              <textarea 
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="4"
                placeholder='Additional Information'
              />
            </div>

            <button type="submit" className="submit-button">
              Submit Booking
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingPage;
