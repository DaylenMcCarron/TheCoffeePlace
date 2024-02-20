// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB4TGM21ymRfc3RB86IMRePxr4uQyvviYI",
  authDomain: "thecoffeeplace-33c12.firebaseapp.com",
  projectId: "thecoffeeplace-33c12",
  storageBucket: "thecoffeeplace-33c12.appspot.com",
  messagingSenderId: "521543496675",
  appId: "1:521543496675:web:288e37dc9c4fdb8143e6d6",
  measurementId: "G-5DGN44DWJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };