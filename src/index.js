import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './Connect4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Connect4 />
  </React.StrictMode>
);

