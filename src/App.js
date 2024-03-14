import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import A from "./components/A";
import Navbar from './components/Navbar';
import firebase from "./firebase"; // Import Firebase
import Allocation from "./components/Allocation";
import Footprint from "./components/Footprint";
import Home from "./components/Home";
import Reward from "./components/Reward";
import All from "./components/All";
import Note from "./components/Note";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setCurrentUser(user);
      } else {
        setLoggedIn(false);
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        {loggedIn && <Navbar />}
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Home userId={currentUser.uid} />} />
              <Route path="/footprint" element={<Footprint />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/All" element={<All />} />
              <Route path="/note" element={<Note />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Allocation />} />
              <Route path="/A" element={<A />} />

              {/* <Route path="/login" element={<A />} /> */}
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </>
          )}
          {/* <Route path="/login" element={<A />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import A from "./components/A";
// import Navbar from './components/Navbar';
// import firebase from "./firebase"; // Import Firebase
// import Allocation from "./components/Allocation";
// import Footprint from "./components/Footprint";
// import Home from "./components/Home"

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false); 
//   const [currentUser, setCurrentUser] = useState(null); 

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         setLoggedIn(true); 
//         setCurrentUser(user); 
//       } else {
//         setLoggedIn(false); 
//         setCurrentUser(null); 
//       }
//     });

//     return () => unsubscribe();
//   }, []);

// const userId = 'user';
//   return (
//     <Router>
//       <div>
//         {loggedIn && <Navbar />}
//         <Routes>
//           {loggedIn ? (
//             <>
             
//               {/* <Route path="/" element={<Navigate to="/Home" />} /> */}
//                <Route path="/" element={<Home userId={userId} />} />
//               {/* <Route path="/allocation" element={<Allocation />} /> */}
//               <Route path="/footprint" element={<Footprint />} />
//             </>
//           ) : (
//             <>
//               {/* <Route path="/" element={<A />} /> */}
//               <Route path="/" element={<Allocation />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </>
//           )}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
