import React, { useRef, useEffect } from "react";
import "./StatusPage.css";

const StatusPage = ({ onClose }) => {
  const statusPageRef = useRef(null); // Reference to detect clicks outside

  const myStatus = {
    name: "My Status",
    description: "Click to add status update",
  };

  const viewedStatuses = [
    { name: "Lala", time: "Today at 6:21 pm" },
    { name: "Hassan Mirza", time: "Today at 12:29 pm" },
    { name: "Sheheryar", time: "Today at 10:03 am" },
    { name: "Sajid Oriental 22", time: "Yesterday at 11:03 pm" },
    { name: "Ahmed Ali", time: "Yesterday at 4:45 pm" },
    { name: "Fatima Khan", time: "Yesterday at 2:15 pm" },
  ];

  const mutedStatuses = [
    { name: "Zara Shah", time: "Today at 5:20 pm" },
    { name: "Ali Haider", time: "Yesterday at 10:00 pm" },
    { name: "Hiba Noor", time: "Yesterday at 6:30 pm" },
    { name: "Usman Tariq", time: "Yesterday at 3:00 pm" },
    { name: "Ayesha Malik", time: "2 Days Ago at 8:15 am" },
  ];

  // Close the StatusPage when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusPageRef.current && !statusPageRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={statusPageRef} className="status-page">
      <div className="status-header">
        <h2>Status</h2>
        <div className="status-header-icons">
          <i className="fas fa-plus"></i> {/* Plus icon */}
          <i className="fas fa-ellipsis-v"></i> {/* Three-dot icon */}
        </div>
      </div>

      {/* My Status */}
      <div className="my-status">
        <div className="status-item">
          <div className="status-icon">My</div>
          <div className="status-text">
            <h4>{myStatus.name}</h4>
            <p>{myStatus.description}</p>
          </div>
        </div>
      </div>

      {/* Viewed Section */}
      <div className="viewed-section">
        <h3>VIEWED</h3>
        {viewedStatuses.map((status, index) => (
          <div key={index} className="status-item">
            <div className="status-icon">{status.name[0]}</div>
            <div className="status-text">
              <h4>{status.name}</h4>
              <p>{status.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Muted Section */}
      <div className="muted-section">
        <h3>MUTED</h3>
        {mutedStatuses.map((status, index) => (
          <div key={index} className="status-item">
            <div className="status-icon">{status.name[0]}</div>
            <div className="status-text">
              <h4>{status.name}</h4>
              <p>{status.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPage;
