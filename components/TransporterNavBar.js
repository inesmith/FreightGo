import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function TransporterNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logoo.png" alt="FreightGo Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/transporter-dashboard"  // Updated to point to TransporterDashboard
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/booking" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/pending" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Pending
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <button className="log-out" onClick={handleLogout}>
        Log Out
      </button>
    </nav>
  );
}

export default TransporterNavBar;
