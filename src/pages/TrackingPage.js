// src/pages/TrackingPage.js

import React, { useState, useEffect } from 'react';
import TrackingCard from '../components/TrackingCard'; // Import the TrackingCard component
import StandardUserNavBar from '../components/StandardUserNavBar';
import Footer from '../components/Footer';
import './style.css'; // Ensure your CSS path is correct

function TrackingPage() {
  const [trackingEvents, setTrackingEvents] = useState([]); // Store the list of tracking events

  useEffect(() => {
    fetchTrackingEvents();
  }, []);

  const fetchTrackingEvents = async () => {
    const fakeTracking = {
      _id: 'track1',
      location: 'John Vorster, Open Window',
      date: '24-11-2024',
      time: '21:39',
      truckType: 'Flatbed Truck',
      status: 'Delivered',
    };

    try {
      const response = await fetch('http://localhost:5000/api/tracking', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tracking events');
      }

      const data = await response.json();
      setTrackingEvents([fakeTracking, ...data]);
    } catch (error) {
      console.error('Error fetching tracking events:', error);
      setTrackingEvents([fakeTracking]); // Fallback to fake tracking
    }
  };

  return (
    <>
      <StandardUserNavBar />
      <div className="tracking-page">
        <div className="tracking-container-pending">
          <h1>Track Events</h1>

          {trackingEvents.length === 0 ? (
            <p>No tracking events available.</p>
          ) : (
            trackingEvents.map((event) => (
              <TrackingCard
                key={event._id}
                location={event.location}
                date={event.date}
                time={event.time}
                truckType={event.truckType}
                status={event.status}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrackingPage;
