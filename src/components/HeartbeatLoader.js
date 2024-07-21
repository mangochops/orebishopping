import React from 'react';
import './HeartbeatLoader.css'; // Import the CSS file for styling
import loader from '../assets/images/Frame 25.png'; // Import the loader image

const HeartbeatLoader = () => {
  return (
    <div className="heartbeat-loader">
      <img src={loader} alt="Logo" className="heartbeat-logo" />
    </div>
  );
};

export default HeartbeatLoader;
