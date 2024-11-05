import React, { useEffect, useState } from 'react';
import PendingBookingCard from '../components/PendingBookingCard'; // Import the component
import TransporterNavBar from '../components/TransporterNavBar';
import Footer from '../components/Footer';
import './style.css'; // Ensure your CSS path is correct

function PendingTrips() {
  const [bookings, setBookings] = useState([]); // Store the list of bookings

  useEffect(() => {
    fetchPendingBookings();
  }, []);

  const fetchPendingBookings = async () => {
    const fakeBooking = {
      _id: 'fake1',
      name: 'Tsungai Katsuro',
      email: 'tsungai@openwindow.co.za',
      contactNumber: '+27 34 434 8394',
      truckType: 'Flatbed Truck',
      pickupLocation: 'John Vorster, Open Window',
      dropOffLocation: '456 Warehouse St, Johannesburg',
      date: new Date(),
      additionalInfo: 'Handle with care!',
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/booking/pending', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data = await response.json();
      setBookings([fakeBooking, ...data]);
    } catch (error) {
      console.error('Error fetching pending bookings:', error);
      setBookings([fakeBooking]); // Fallback to fake booking
    }
  };

  const handleAccept = async (bookingId) => {
    console.log(`Booking with ID ${bookingId} accepted.`);
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5000/api/booking/${bookingId}/accept`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchPendingBookings();
    } catch (error) {
      console.error('Error accepting booking:', error);
    }
  };

  const handleReject = async (bookingId) => {
    console.log(`Booking with ID ${bookingId} rejected.`);
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5000/api/booking/${bookingId}/reject`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchPendingBookings();
    } catch (error) {
      console.error('Error rejecting booking:', error);
    }
  };

  return (
    <>
      <TransporterNavBar />
      <div className="pending-trips-page">
        <div className="booking-container-pending">
          <h1>Pending Trips</h1>

          {bookings.length === 0 ? (
            <p>No pending bookings available.</p>
          ) : (
            bookings.map((booking) => (
              <PendingBookingCard
                key={booking._id}
                booking={booking}
                onAccept={handleAccept}
                onReject={handleReject}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PendingTrips;
