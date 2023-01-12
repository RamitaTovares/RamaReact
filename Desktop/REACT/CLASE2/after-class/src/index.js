import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqYvnKNABhUvyksWgu8py5_QEUW8XTIX4",
  authDomain: "ramareact.firebaseapp.com",
  projectId: "ramareact",
  storageBucket: "ramareact.appspot.com",
  messagingSenderId: "125020265071",
  appId: "1:125020265071:web:de0e90655b08677fcfcb9a",
  measurementId: "G-739M1X7ZFD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
