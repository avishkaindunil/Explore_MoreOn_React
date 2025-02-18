import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";

function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)
  return (
    <>
      <h1 onClick={() => setNumber(1)}>{number}</h1>
      <button onClick={() => setNumber([])}>Reset</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

reportWebVitals();
