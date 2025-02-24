import React, { useReducer, useState, useEffect, useRef, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";
import { useInput } from "./useInput";
import App from "./App"

const TreesContext = createContext();

export const useTrees = () => 
  useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App /> 
  </TreesContext.Provider>
);

reportWebVitals();
