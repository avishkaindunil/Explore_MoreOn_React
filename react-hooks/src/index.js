import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {

  const[checked, setChecked] = useState(false);
  return(
    <div>
      <input type='checkbox' value={checked} onChange={() => setChecked((checked) => !checked)} />
      <p>{checked ? "Checked" : "Not checked"}</p>
    </div>
  )
  // const [status, setStatus] = useState("Not Deleivered");
  // return(
  //   <div>
  //     <h1>The package is: {status}</h1>
  //     <button onClick={() => setStatus("Delivered")}>Deliver</button>
  //   </div>
  // )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
