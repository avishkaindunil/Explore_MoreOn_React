import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";

const initialState = {
  message: "Hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
    return {
      message: `Hey! I just said ${state.message}`
    };

    case "whisper":
      return {
        message: `Excuse me, I just said ${state.message}`
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell"})}>Yell</button>
      <button onClick={() => dispatch({ type: "whisper"})}>Whisper</button>
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
