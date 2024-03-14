//  import React, { useState, useEffect } from 'react';
//  import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import firebase from '../firebase'; // Import firebase from your firebase.js
// import { Bar } from 'react-chartjs-2';
// import './Home.css';
// import Chart from 'chart.js/auto';

// const Home = () => {
//   const [regularUsage, setRegularUsage] = useState(null);
//   const [surplusUsage, setSurplusUsage] = useState(null);
//   const [emergencyUsage, setEmergencyUsage] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usageRef = firebase.database().ref('water_usage');
//         const snapshot = await usageRef.once('value');

//         const data = snapshot.val();

//         setRegularUsage(data.regularUsage);
//         setSurplusUsage(data.surplusUsage);
//         setEmergencyUsage(data.emergencyUsage);
//       } catch (error) {
//         console.error('Error fetching usage data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//  <div className="usage-chart">
//         <h2>Usage Breakdown</h2>
//         <Bar
//           data={{
//             labels: ['Regular', 'Surplus', 'Emergency'],
//             datasets: [
//               {
//                 label: 'Usage',
//                 backgroundColor: [
//                   'rgba(255, 99, 132, 0.6)',
//                   'rgba(54, 162, 235, 0.6)',
//                   'rgba(255, 206, 86, 0.6)',
//                 ],
//                 borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                 ],
//                 borderWidth: 1,
//                 data: [regularUsage, surplusUsage, emergencyUsage],
//               },
//             ],
//           }}
//           options={{
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//             },
//           }}
//         />
//       </div>

// <br/><hr/><hr/>
//       <div className="usage-section">
//         <h2>Distributed Usage</h2>
//         <div className="progress-bars">
        //   <div className="progress-bar">
        //     {regularUsage !== null && (
        //       <CircularProgressbar
        //         value={regularUsage}
        //         text={`${regularUsage}%`}
        //         strokeWidth={5} // Reduced strokeWidth for smaller circles
        //         styles={buildStyles({
        //           textColor: '#333',
        //           pathColor: 'rgba(255, 99, 132, 0.6)',
        //           trailColor: 'rgba(255, 99, 132, 0.2)', // Lighter trail color
        //           strokeLinecap: 'round', // Rounded line ends for smoother appearance
        //           width: '80px', // Adjusted width for smaller circles
        //         })}
        //       />
        //     )}
        //     <p>Wash Basins</p>
        //   </div>
        //   <div className="progress-bar">
        //     {surplusUsage !== null && (
        //       <CircularProgressbar
        //         value={surplusUsage}
        //         text={`${surplusUsage}%`}
        //         strokeWidth={5} // Reduced strokeWidth for smaller circles
        //         styles={buildStyles({
        //           textColor: '#333',
        //           pathColor: 'rgba(54, 162, 235, 0.6)',
        //           trailColor: 'rgba(54, 162, 235, 0.2)', // Lighter trail color
        //           strokeLinecap: 'round', // Rounded line ends for smoother appearance
        //           width: '80px', // Adjusted width for smaller circles
        //         })}
        //       />
        //     )}
        //     <p>Kitchen</p>
        //   </div>
        //   <div className="progress-bar">
        //     {emergencyUsage !== null && (
        //       <CircularProgressbar
        //         value={emergencyUsage}
        //         text={`${emergencyUsage}%`}
        //         strokeWidth={5} // Reduced strokeWidth for smaller circles
        //         styles={buildStyles({
        //           textColor: '#333',
        //           pathColor: 'rgba(255, 206, 86, 0.6)',
        //           trailColor: 'rgba(255, 206, 86, 0.2)', // Lighter trail color
        //           strokeLinecap: 'round', // Rounded line ends for smoother appearance
        //           width: '80px', // Adjusted width for smaller circles
        //         })}
        //       />
        //     )}
        //     <p>Bathroom</p>
        //   </div>
        // </div>
//       </div> 
      
//     </div>
//   );
// };

// export default Home;




//2


// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import firebase from '../firebase'; // Import firebase from your firebase.js
// import './Home.css';

// const Home = () => {
//   const [weeklyUsage, setWeeklyUsage] = useState(null);
//    const [surplusUsage, setSurplusUsage] = useState(null);
//   const [emergencyUsage, setEmergencyUsage] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const weeklyUsageRef = firebase.database().ref('weekly_usage/week1');
//         const snapshot = await weeklyUsageRef.once('value');

//         if (snapshot.exists() && snapshot.val()) {
//           const data = snapshot.val();
//           const usageData = Object.values(data);
//           setWeeklyUsage(usageData);
//         } else {
//           console.log('Weekly usage data is empty or does not exist.');
//         }
//       } catch (error) {
//         console.error('Error fetching weekly usage data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//     <div className="usage-chart">
//         <h2>Usage Breakdown</h2>
//         <Bar
//           data={{
//             labels: ['Regular', 'Surplus', 'Emergency'],
//             datasets: [
//               {
//                 label: 'Usage',
//                 backgroundColor: [
//                   'rgba(255, 99, 132, 0.6)',
//                   'rgba(54, 162, 235, 0.6)',
//                   'rgba(255, 206, 86, 0.6)',
//                 ],
//                 borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                 ],
//                 borderWidth: 1,
//                 data: [regularUsage, surplusUsage, emergencyUsage],
//               },
//             ],
//           }}
//           options={{
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//             },
//           }}
//         />
//       </div>

// <br/><hr/><hr/>
//       <div className="usage-section">
//         <h2>Distributed Usage</h2>
//         <div className="progress-bars">
//           <div className="progress-bar">
//             {regularUsage !== null && (
//               <CircularProgressbar
//                 value={regularUsage}
//                 text={`${regularUsage}%`}
//                 strokeWidth={5} // Reduced strokeWidth for smaller circles
//                 styles={buildStyles({
//                   textColor: '#333',
//                   pathColor: 'rgba(255, 99, 132, 0.6)',
//                   trailColor: 'rgba(255, 99, 132, 0.2)', // Lighter trail color
//                   strokeLinecap: 'round', // Rounded line ends for smoother appearance
//                   width: '80px', // Adjusted width for smaller circles
//                 })}
//               />
//             )}
//             <p>Wash Basins</p>
//           </div>
//           <div className="progress-bar">
//             {surplusUsage !== null && (
//               <CircularProgressbar
//                 value={surplusUsage}
//                 text={`${surplusUsage}%`}
//                 strokeWidth={5} // Reduced strokeWidth for smaller circles
//                 styles={buildStyles({
//                   textColor: '#333',
//                   pathColor: 'rgba(54, 162, 235, 0.6)',
//                   trailColor: 'rgba(54, 162, 235, 0.2)', // Lighter trail color
//                   strokeLinecap: 'round', // Rounded line ends for smoother appearance
//                   width: '80px', // Adjusted width for smaller circles
//                 })}
//               />
//             )}
//             <p>Kitchen</p>
//           </div>
//           <div className="progress-bar">
//             {emergencyUsage !== null && (
//               <CircularProgressbar
//                 value={emergencyUsage}
//                 text={`${emergencyUsage}%`}
//                 strokeWidth={5} // Reduced strokeWidth for smaller circles
//                 styles={buildStyles({
//                   textColor: '#333',
//                   pathColor: 'rgba(255, 206, 86, 0.6)',
//                   trailColor: 'rgba(255, 206, 86, 0.2)', // Lighter trail color
//                   strokeLinecap: 'round', // Rounded line ends for smoother appearance
//                   width: '80px', // Adjusted width for smaller circles
//                 })}
//               />
//             )}
//             <p>Bathroom</p>
//           </div>
//         </div>
//       </div>






//       <div className="weekly-usage-chart">
//         <h2>Weekly Water Usage</h2>
//         {weeklyUsage ? (
//           <Line
//             data={{
//               labels: Object.keys(weeklyUsage),
//               datasets: [
//                 {
//                   label: 'Weekly Usage',
//                   data: Object.values(weeklyUsage),
//                   fill: false,
//                   backgroundColor: 'rgba(75, 192, 192, 0.4)',
//                   borderColor: 'rgba(75, 192, 192, 1)',
//                 },
//               ],
//             }}
//             options={{
//               scales: {
//                 y: {
//                   beginAtZero: true,
//                 },
//               },
//             }}
//           />
//         ) : (
//           <p>No weekly usage data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


//3

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import firebase from '../firebase';
import { Bar } from 'react-chartjs-2';
import './Home.css';

const Home = () => {
  const [regularUsage, setRegularUsage] = useState(null);
  const [surplusUsage, setSurplusUsage] = useState(null);
  const [emergencyUsage, setEmergencyUsage] = useState(null);
  const [weeklyUsage, setWeeklyUsage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usageRef = firebase.database().ref('water_usage');
        const usageSnapshot = await usageRef.once('value');
        const usageData = usageSnapshot.val();
        setRegularUsage(usageData.regularUsage);
        setSurplusUsage(usageData.surplusUsage);
        setEmergencyUsage(usageData.emergencyUsage);

        const weeklyUsageRef = firebase.database().ref('weekly_usage/week1');
        const weeklySnapshot = await weeklyUsageRef.once('value');
        if (weeklySnapshot.exists()) {
          const weeklyData = weeklySnapshot.val();
          setWeeklyUsage(weeklyData);
        } else {
          console.log('Weekly usage data is empty or does not exist.');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div>
         <div className="weekly-usage-chart">
        <h2>Weekly Water Usage</h2>
        {weeklyUsage ? (
          <Line
            data={{
              labels: Object.keys(weeklyUsage),
              datasets: [
                {
                  label: 'Weekly Usage',
                  data: Object.values(weeklyUsage),
                  fill: false,
                  backgroundColor: 'rgba(75, 192, 192, 0.4)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        ) : (
          <p>No weekly usage data available.</p>
        )}
      </div>
        </div>

        <div className="usage-section">
          <h2>Distributed Usage</h2>
          <div className="progress-bars">
            <div className="progress-bar">
              {regularUsage !== null && (
                <CircularProgressbar
                  value={regularUsage}
                  text={`${regularUsage}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: 'rgba(255, 99, 132, 0.6)',
                    trailColor: 'rgba(255, 99, 132, 0.2)',
                    strokeLinecap: 'round',
                    width: '80px',
                  })}
                />
              )}
              <p>Wash Basins</p>
            </div>
            <div className="progress-bar">
              {surplusUsage !== null && (
                <CircularProgressbar
                  value={surplusUsage}
                  text={`${surplusUsage}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: 'rgba(54, 162, 235, 0.6)',
                    trailColor: 'rgba(54, 162, 235, 0.2)',
                    strokeLinecap: 'round',
                    width: '80px',
                  })}
                />
              )}
              <p>Kitchen</p>
            </div>
            <div className="progress-bar">
              {emergencyUsage !== null && (
                <CircularProgressbar
                  value={emergencyUsage}
                  text={`${emergencyUsage}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: '#333',
                    pathColor: 'rgba(255, 206, 86, 0.6)',
                    trailColor: 'rgba(255, 206, 86, 0.2)',
                    strokeLinecap: 'round',
                    width: '80px',
                  })}
                />
              )}
              <p>Bathroom</p>
            </div>
          </div>
        </div>
      </div>

     <div className="usage-chart">
          <h2>Usage Breakdown</h2>
          <Bar
            data={{
              labels: ['Regular', 'Surplus', 'Emergency'],
              datasets: [
                {
                  label: 'Usage',
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                  ],
                  borderWidth: 1,
                  data: [regularUsage, surplusUsage, emergencyUsage],
                },
              ],
            }}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>

      <button className="add-request-button">Add Request</button>
    </div>
  );
};
 export default Home;

// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import firebase from '../firebase';
// import { Bar } from 'react-chartjs-2';
// import './Home.css';

// const Home = () => {
//   const [regularUsage, setRegularUsage] = useState(null);
//   const [surplusUsage, setSurplusUsage] = useState(null);
//   const [emergencyUsage, setEmergencyUsage] = useState(null);
//   const [weeklyUsage, setWeeklyUsage] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usageRef = firebase.database().ref('water_usage');
//         const usageSnapshot = await usageRef.once('value');
//         const usageData = usageSnapshot.val();
//         setRegularUsage(usageData.regularUsage);
//         setSurplusUsage(usageData.surplusUsage);
//         setEmergencyUsage(usageData.emergencyUsage);

//         const weeklyUsageRef = firebase.database().ref('weekly_usage/week1');
//         const weeklySnapshot = await weeklyUsageRef.once('value');
//         if (weeklySnapshot.exists()) {
//           const weeklyData = weeklySnapshot.val();
//           setWeeklyUsage(weeklyData);
//         } else {
//           console.log('Weekly usage data is empty or does not exist.');
//         }
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <div className="content">
//         <div className="usage-section">
//           <h2>Distributed Usage</h2>
//           <div className="progress-bars">
//             <div className="progress-bar">
//               {regularUsage !== null && (
//                 <CircularProgressbar
//                   value={regularUsage}
//                   text={`${regularUsage}%`}
//                   strokeWidth={5}
//                   styles={buildStyles({
//                     textColor: '#333',
//                     pathColor: 'rgba(255, 99, 132, 0.6)',
//                     trailColor: 'rgba(255, 99, 132, 0.2)',
//                     strokeLinecap: 'round',
//                     width: '80px',
//                   })}
//                 />
//               )}
//               <p>Wash Basins</p>
//             </div>
//             <div className="progress-bar">
//               {surplusUsage !== null && (
//                 <CircularProgressbar
//                   value={surplusUsage}
//                   text={`${surplusUsage}%`}
//                   strokeWidth={5}
//                   styles={buildStyles({
//                     textColor: '#333',
//                     pathColor: 'rgba(54, 162, 235, 0.6)',
//                     trailColor: 'rgba(54, 162, 235, 0.2)',
//                     strokeLinecap: 'round',
//                     width: '80px',
//                   })}
//                 />
//               )}
//               <p>Kitchen</p>
//             </div>
//             <div className="progress-bar">
//               {emergencyUsage !== null && (
//                 <CircularProgressbar
//                   value={emergencyUsage}
//                   text={`${emergencyUsage}%`}
//                   strokeWidth={5}
//                   styles={buildStyles({
//                     textColor: '#333',
//                     pathColor: 'rgba(255, 206, 86, 0.6)',
//                     trailColor: 'rgba(255, 206, 86, 0.2)',
//                     strokeLinecap: 'round',
//                     width: '80px',
//                   })}
//                 />
//               )}
//               <p>Bathroom</p>
//             </div>
//           </div>
//         </div>

//         <div className="weekly-usage-chart">
//           <h2>Weekly Water Usage</h2>
//           {weeklyUsage ? (
//             <Line
//               data={{
//                 labels: Object.keys(weeklyUsage),
//                 datasets: [
//                   {
//                     label: 'Weekly Usage',
//                     data: Object.values(weeklyUsage),
//                     fill: false,
//                     backgroundColor: 'rgba(75, 192, 192, 0.4)',
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                   },
//                 ],
//               }}
//               options={{
//                 scales: {
//                   y: {
//                     beginAtZero: true,
//                   },
//                 },
//               }}
//             />
//           ) : (
//             <p>No weekly usage data available.</p>
//           )}
//         </div>
//       </div>

//       <div className="usage-chart">
//         <h2>Usage Breakdown</h2>
//         <Bar
//           data={{
//             labels: ['Regular', 'Surplus', 'Emergency'],
//             datasets: [
//               {
//                 label: 'Usage',
//                 backgroundColor: [
//                   'rgba(255, 99, 132, 0.6)',
//                   'rgba(54, 162, 235, 0.6)',
//                   'rgba(255, 206, 86, 0.6)',
//                 ],
//                 borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                 ],
//                 borderWidth: 1,
//                 data: [regularUsage, surplusUsage, emergencyUsage],
//               },
//             ],
//           }}
//           options={{
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//             },
//           }}
//         />
//       </div>

//       <button className="add-request-button">Add Request</button>
//     </div>
//   );
// };

// export default Home;
