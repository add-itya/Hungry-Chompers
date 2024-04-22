import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from './components/home_page/home_page';
import AccountCreationPage from './components/account_creation/account_creation.js'; 
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

