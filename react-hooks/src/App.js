import React from "react";
import logo from './logo.svg';
import './App.css';
import { useTrees } from "./";

function App() {
  const { trees } = useTrees();

  return (
    <div>
      <h1>Trees I've Heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
