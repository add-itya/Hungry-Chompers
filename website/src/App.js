import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home_page/home_page';
import AccountCreationPage from './components/account_creation/account_creation.js'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToAccountPage = () => {
    setCurrentPage('account');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage navigateToAccountPage={navigateToAccountPage} />}
      {currentPage === 'account' && <AccountCreationPage />}
    </div>
  );
}

export default App;