import React from 'react';
import { GoAlertFill } from 'react-icons/go'; // Importing Alert icon from React Icons
import './Note.css'; // Importing CSS file for styling

const Note = () => {

  const notifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    { id: 3, message: 'Notification 3' },
    { id: 4, message: 'Notification 4' },
    { id: 5, message: 'Notification 5' },
  ];

  return (
    <div className="notifications-container">
        <br/>
        <h4>Notifications <hr/></h4>
       
      {notifications.map(notification => (
        <div key={notification.id} className="notification-card">
          <div className="alert-icon">
            <GoAlertFill style={{ color: 'red' }} />
          </div>
          <div className="notification-content">
            <p>{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Note;
