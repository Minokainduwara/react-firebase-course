import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfB0nDhKsPs2MbP2mJWlvumVbYDu8y8Ww",
  authDomain: "fir-tutorial-37b57.firebaseapp.com",
  projectId: "fir-tutorial-37b57",
  storageBucket: "fir-tutorial-37b57.firebasestorage.app",
  messagingSenderId: "360950051372",
  appId: "1:360950051372:web:279bff65a51cfe5fc4d789",
  measurementId: "G-17CTH6L4R3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();