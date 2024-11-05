// src/components/PendingBookingCard.js

import React from 'react';
import './PendingBookingCard.css';
import SwapVertIcon from '../assets/swap_vert_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg';
import SwapVertIcon2 from '../assets/swap_vert_24dp_2B300B_FILL0_wght400_GRAD0_opsz24.svg';


const PendingBookingCard = ({ booking, onAccept, onReject }) => {
  return (
    <div className="pending-booking-card">
      <div className="card-header">
        <div className="icon-container">
          <span className="material-icons">local_shipping</span>
        </div>
        <h2>{booking.name}</h2>
        <p className="booking-date">{new Date(booking.date).toLocaleDateString()} | 12:32</p>
      </div>
      <div className="card-details">
      <div className="icon-container2">
          <span className="material-icons">swap_vert</span>
        </div>
       <p className="pickup"><strong>Pick up:</strong> {booking.pickupLocation}</p>
        <p className="dropoff"><strong>Drop off:</strong> {booking.dropOffLocation}</p>
        <p className="additional-info"><strong>Additional Information:</strong> {booking.additionalInfo || 'Handle with care!'}</p>
      </div>
      <div className="card-contact">
        <p>{booking.email}</p>
        <p className='nom'>{booking.contactNumber}</p>
      </div>
      <div className="card-actions">
        <button className="accept-button" onClick={() => onAccept(booking._id)}>
          Accept
        </button>
        <button className="reject-button" onClick={() => onReject(booking._id)}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default PendingBookingCard;
