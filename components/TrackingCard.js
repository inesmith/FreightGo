// src/components/TrackingCard.js
import React from 'react';
import './TrackingCard.css';

const TrackingCard = ({ location, date, time, truckType, status }) => {
  return (
    <div>
    <div className="tracking-card">
      <div className="tracking-card-header">
        <h3>Pickup at: {location}</h3>
        <a href="#" className="contact-driver">Contact Driver</a>
      </div>
      <p className="tracking-date-time">{date} | {time}</p>
      <p className="tracking-truck-type">Truck Type: {truckType}</p>
      <div className="tracking-status-buttons">
        <button className={`status-button ${status === 'Pending' ? 'active' : ''}`}>Pending</button>
        <button className={`status-button ${status === 'Accepted' ? 'active' : ''}`}>Accepted</button>
        <button className={`status-button ${status === 'Delivered' ? 'active' : ''}`}>Delivered</button>

    </div>
    </div>
    </div>
  );
};

export default TrackingCard;
