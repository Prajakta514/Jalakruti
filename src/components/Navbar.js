import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import "./Navbar.css"; // Import CSS file for Navbar styles
import j4 from "./j3.jpeg";
import j5 from "./bg_nav.png";
import Atom from "./Atom.png"

const Navbar = () => {
  const handleLogout = () => {
    firebase.auth().signOut(); // Sign out the user
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${j5})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
      <div className="navbar-brand">
         <Link to="/" className="nav-link">
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Atom} alt="JalAkruti" className="logo" style={{ width: '30px', height: '30px', marginRight: '5px' , marginLeft: '100px'}} />
         <h4 style={{ color: 'white', margin: '0' }}>JalAkruti</h4>
      </div>
  </Link>
        <br/><br/><br/>
      </div>
      <div className="nav-links" style={{ color: 'white' , fontSize: '20px'}}>
        <Link to="/" className="nav-link">Water usage</Link>
        <Link to="/All" className="nav-link">Water Allocation</Link>
        <Link to="/footprint" className="nav-link">Your water Footprint</Link>
        <Link to="/reward" className="nav-link">Rewards</Link>
        <Link to="/note" className="nav-link">Notifications</Link>
      </div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default Navbar;
