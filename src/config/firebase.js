// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfB0nDhKsPs2MbP2mJWlvumVbYDu8y8Ww",
  authDomain: "fir-tutorial-37b57.firebaseapp.com",
  projectId: "fir-tutorial-37b57",
  storageBucket: "fir-tutorial-37b57.firebasestorage.app",
  messagingSenderId: "360950051372",
  appId: "1:360950051372:web:279bff65a51cfe5fc4d789",
  measurementId: "G-17CTH6L4R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);