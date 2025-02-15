import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";

function App() {
  const [name, setName] = useState("Jan");

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>Change Winner</button>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
