import React from "react";
import "./spinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container" data-testid="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
