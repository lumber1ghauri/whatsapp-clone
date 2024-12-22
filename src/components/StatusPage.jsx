import React from 'react';
import './StatusPage.css';

const StatusPage = ({onClose}) => {
  return (
    <div className="status-page">
      <button onClick = {onClose} className="close-btn">X</button>
      <h2>Status</h2>
      <div className="status-list">
        <div className="status-item">
          <img src="status1.jpg" alt="Status 1" />
          <p>Status 1</p>
        </div>
        <div className="status-item">
          <img src="status2.jpg" alt="Status 2" />
          <p>Status 2</p>
        </div>
        <div className="status-item">
          <img src="status3.jpg" alt="Status 3" />
          <p>Status 3</p>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;