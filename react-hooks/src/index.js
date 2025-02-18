import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return (
    <>
      <input 
        type='checkbox'
        value={checked}
        onChange={toggle}
      />
      {checked ? "Checked" : 'Not Checked'}
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
