import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useFetch } from "./useFetch";

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading...</h1>;
  if (error) 
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );
  return (
    <div>
      <div>
      <img src={data.avatar_url} alt={data.login} />
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App login="eveporcello"/> 
);

reportWebVitals();
