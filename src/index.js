import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/styles/pagestyle.css'
import './components/styles/alternatestyles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);