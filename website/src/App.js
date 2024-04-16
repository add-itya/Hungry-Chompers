import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home_page/home_page';
import AccountCreationPage from './components/account_creation/account_creation.js'; 
import MainPage from './components/main_page/main_page'; // Import main page component

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for logged in status

  const navigateToAccountPage = () => {
    setCurrentPage('account');
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    setCurrentPage('main'); // Set current page to main upon successful login
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage navigateToAccountPage={navigateToAccountPage} handleLogin={handleLogin} />}
      {currentPage === 'account' && <AccountCreationPage />}
      {isLoggedIn && <MainPage />}
    </div>
  );
}

export default App;
