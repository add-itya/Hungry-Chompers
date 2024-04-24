import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home_page/home_page';
import AccountCreationPage from './components/account_creation/account_creation.js'; 
import AboutUs from './components/about_us/about_us.js';
import Contact from './components/contact/contact.js';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for logged in status


  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    setCurrentPage('main'); // Set current page to main upon successful login
  };

  return (
      <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/account_creation" element={<AccountCreationPage/>}/>
            <Route path="/about_us" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
