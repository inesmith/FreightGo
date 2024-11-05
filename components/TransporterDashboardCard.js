import React from 'react';
import './TransporterDashboardCard.css';

const TransporterDashboardCard = ({ transporterData }) => {
  return (
    <div className="transporter-dashboard-card">
        <div className="dashboardpage-container">
        <h1 className='profile'>Name Surname</h1>
        <h1 className='profile'>{transporterData.name.surname}</h1>
        <p className="status">Status: {transporterData.status}</p>
        <p className="contact-info-email">
          {transporterData.email}
        </p>
        <p className="contact-info-nom">
          {transporterData.contactNumber}
        </p>
      <div className="card-stats">
        <div className="stats-item">
          <p><strong>Total Pickups:</strong> {transporterData.totalPickups}</p>
          <button className="view-button">View</button>
        </div>
        <div className="stats-item">
          <p><strong>Total Deliveries:</strong> {transporterData.totalDeliveries}</p>
          <button className="view-button">View</button>
        </div>
      </div>
      <button className="edit-button">Edit</button>
    </div>
    </div>
  );
};

export default TransporterDashboardCard;
