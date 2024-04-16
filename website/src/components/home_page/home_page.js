import React, { useState } from 'react';
import './home_page.css';

function HomePage({navigateToAccountPage}) {
  const handleCreateAccount = () => {
    // Logic to switch to account creation page
  };

  return (
    <div className="container">
      <div className='WelcomeText'>
        <h1>Welcome to Hungry Chompers</h1>
        <p>Please sign in or create an account below.</p>
      </div>
      <div className='SignIn'>
        <h2>Sign In</h2>
        <form>
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className='SubmitButton' onClick={handleLogin}>Submit</button>
          <p></p>
        </form>
        <h2>Create Account</h2>
        <button className='CreateAccountButton' onClick={navigateToAccountPage}>Account Creation Page</button>
      </div>
    </div>
  );
}

export default HomePage;
