import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import firebase from "../firebase";
import "./Auth.css";
import axios from "axios";
import j7 from "./j7.png";
import Atom from "./Atom.png"

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      handleFirebaseError(error);
    }
  };
  
  const handleEmailSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
      if (password.length < 8) {
        alert("Password should be at least 8 characters long");
        return;
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      const url = 'https://hm0003-github-backend.onrender.com/createUser';
      
      const data = {
        email: email,
      };
      const jsonData = JSON.stringify(data);
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.post(url, jsonData, config)
        .then(response => {
          console.log('PUT request successful');
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      navigate("/home");
    } catch (error) {
      handleFirebaseError(error);
    }
  };

  const handleFirebaseError = (error) => {
    switch (error.code) {
      case "auth/invalid-email":
        alert("Please enter a valid email address.");
        break;
      case "auth/wrong-password":
        alert("Incorrect password. Please try again.");
        break;
      default:
        alert("Enter Valid Email/ Password");
    }
  };
  

  return (
    <div className="AA" >
   
    <div className={`auth-container ${location.pathname === '/A' ? 'background-image' : ''}`} >
     


 <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Atom} alt="JalAkruti" className="logo" style={{ width: '28px', height: '28px', marginRight: '5px' , marginLeft: '100px'}} />
         <h3 style={{ color: 'white', margin: '0' }}>JalAkruti</h3>
        
      </div>
       <h6 className="auth-title">Water Footprint Calculator</h6>
      
      <div className="auth-buttons">
        <button className="google-button" onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>
      </div>
      <div className="auth-form">
        <h6>{isSignUp ? "Sign Up with Email" : "Sign In with Email"}</h6>
        {isSignUp && (
          <div className="auth-input">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="auth-input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSignUp && (
          <div className="auth-input">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <div className="auth-buttons">
          {isSignUp ? (
            <button className="email-button" onClick={handleEmailSignUp}>
              Sign Up
            </button>
          ) : (
            <button className="email-button" onClick={handleEmailSignIn}>
              Sign In
            </button>
          )}
          <button
            className="toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In Instead" : "Sign Up Instead"}
          </button>
        </div>
      </div>
      <p className="footer-text">© 2024 JalAkruti - Water Footprint Calculator</p>
    </div></div>
  );
};

export default Auth;
