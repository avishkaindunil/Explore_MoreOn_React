import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";

const creatArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"}
  onClick={onSelect}/>;
}

function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
  <>
    {creatArray(totalStars).map((n, i) =>(
      <Star key={i} 
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)}/>
    ))}
    <p>{selectedStars} of {totalStars}</p>
  </>
  );
}

function App() {
  return <StarRating totalStars={5}/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
