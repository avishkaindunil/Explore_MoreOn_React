import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH-hMfGRIPlcLeGizsEXPdegk2ppBr65k",
  authDomain: "react-blog-app-ab87e.firebaseapp.com",
  projectId: "react-blog-app-ab87e",
  storageBucket: "react-blog-app-ab87e.firebasestorage.app",
  messagingSenderId: "99095986991",
  appId: "1:99095986991:web:cb15e1006ae16f820b97da"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
