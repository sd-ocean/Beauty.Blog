import React from 'react';
import './LoadingOverlay.css'; // CSS hiệu ứng

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <img src={logo} alt="Logo" className="loading-logo" />
        <h2 className="loading-title">Sắc Đẹp Việt Nam</h2>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;