import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home_page/home_page';
import AccountCreationPage from './components/account_creation/account_creation.js'; 
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToAccountPage = () => {
    setCurrentPage('account');
  };

  const navigateToHomePage = () => {
    setCurrentPage('home');
  }

  const navigateToPage = (page) => {
    setCurrentPage(page);
  }


  return (
      <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            {/* <Route path="/home" element={<HomePage />}/> */}
            <Route path="/account_creation" element={<AccountCreationPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;