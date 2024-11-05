import React, { useEffect, useState } from 'react';

const FreightList = () => {
  const [freights, setFreights] = useState([]);

  // Function to fetch freight data from the backend
  const fetchFreights = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/freight'); // Backend API endpoint
      const data = await response.json();
      setFreights(data); // Store the fetched data in state
    } catch (error) {
      console.error('Error fetching freights:', error);
    }
  };

  // Fetch freight data on component mount
  useEffect(() => {
    fetchFreights();
  }, []);

  return (
    <div>
      <h1>Freight List</h1>
      {freights.length === 0 ? (
        <p>No freights available.</p>
      ) : (
        <ul>
          {freights.map((freight) => (
            <li key={freight._id}>
              {freight.name} - {freight.truckType} - {freight.units} units
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FreightList;
