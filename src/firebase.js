import 'firebase/compat/database';
import firebase from 'firebase/compat/app'; // Import the compat version of firebase/app
import 'firebase/compat/auth'; // Import specific modules from firebase/compat
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA0h5RPYsWW_IcuzHi2LoDvkg4gHW1gUDA",
  authDomain: "jalakruti-53c56.firebaseapp.com",
  databaseURL: "https://jalakruti-53c56-default-rtdb.firebaseio.com",
  projectId: "jalakruti-53c56",
  storageBucket: "jalakruti-53c56.appspot.com",
  messagingSenderId: "884431643396",
  appId: "1:884431643396:web:064040eb39e7c9367be651"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const auth = firebase.auth();
export default firebase;
export const firestore = firebase.firestore();


