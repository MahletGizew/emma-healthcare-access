// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvN2mSex6CYTjaIcqNgSGXWUafcXjKYvQ",
  authDomain: "emma-healthcare-access.firebaseapp.com",
  projectId: "emma-healthcare-access",
  storageBucket: "emma-healthcare-access.firebasestorage.app",
  messagingSenderId: "684883452458",
  appId: "1:684883452458:web:e5961ff22d33d0805c5953",
  measurementId: "G-FJQZ9QLR5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
};
