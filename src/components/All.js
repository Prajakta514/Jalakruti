import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import firebase from '../firebase'; // Import firebase from your firebase.js
import './Home.css';
import Chart from 'chart.js/auto';

const All = () => {
  const [regularUsage, setRegularUsage] = useState(null);
  const [surplusUsage, setSurplusUsage] = useState(null);
  const [emergencyUsage, setEmergencyUsage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usageRef = firebase.database().ref('water_usage');
        const snapshot = await usageRef.once('value');

        const data = snapshot.val();

        setRegularUsage(data.regularUsage);
        setSurplusUsage(data.surplusUsage);
        setEmergencyUsage(data.emergencyUsage);
      } catch (error) {
        console.error('Error fetching usage data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleAddRequest = (type) => {
    // Logic to handle adding a request for surplus or emergency
    console.log(`Adding a request for ${type}`);
  };

  return (
    <div className="container">
      <div className="usage-section">
        <h2>Your Household </h2>
        <div className="progress-bars">
          <div className="progress-bar">
            {regularUsage !== null && (
              <CircularProgressbar
                value={regularUsage}
                text={`${regularUsage}%`}
                strokeWidth={5} // Reduced strokeWidth for smaller circles
                styles={buildStyles({
                  textColor: '#333',
                  pathColor: 'rgba(255, 99, 132, 0.6)',
                  trailColor: 'rgba(255, 99, 132, 0.2)', // Lighter trail color
                  strokeLinecap: 'round', // Rounded line ends for smoother appearance
                  width: '80px', // Adjusted width for smaller circles
                })}
              />
            )}
            <p>Regular</p>
          </div>
          <div className="progress-bar">
            {surplusUsage !== null && (
              <>
                <CircularProgressbar
                  value={surplusUsage}
                  text={`${surplusUsage}%`}
                  strokeWidth={5} // Reduced strokeWidth for smaller circles
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: 'rgba(54, 162, 235, 0.6)',
                    trailColor: 'rgba(54, 162, 235, 0.2)', // Lighter trail color
                    strokeLinecap: 'round', // Rounded line ends for smoother appearance
                    width: '80px', // Adjusted width for smaller circles
                  })}
                />
                <button onClick={() => handleAddRequest('surplus')} className="add-request-button">Add Request</button>
              </>
            )}
            <p>Surplus</p>
          </div>
          <div className="progress-bar">
            {emergencyUsage !== null && (
              <>
                <CircularProgressbar
                  value={emergencyUsage}
                  text={`${emergencyUsage}%`}
                  strokeWidth={5} // Reduced strokeWidth for smaller circles
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: 'rgba(255, 206, 86, 0.6)',
                    trailColor: 'rgba(255, 206, 86, 0.2)', // Lighter trail color
                    strokeLinecap: 'round', // Rounded line ends for smoother appearance
                    width: '80px', // Adjusted width for smaller circles
                  })}
                />
                <button onClick={() => handleAddRequest('emergency')} className="add-request-button">Add Request</button>
              </>
            )}
            <p>Emergency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
