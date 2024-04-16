import React from 'react';
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
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button className='SubmitButton'>Submit</button>
          <p></p>
          <button className='CreateAccountButton' onClick={navigateToAccountPage}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
