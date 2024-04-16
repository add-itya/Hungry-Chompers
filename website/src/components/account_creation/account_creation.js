import React from 'react';
import './account_creation.css';

function AccountCreation() {
    return (
        <div className="container">
            <div className='WelcomeText'>
                <h1>Account Creation</h1>
                <p>To make an account please fill in the information.</p>
            </div>
            <div className='Creation'>
                <form>
                    <label>
                        Email: 
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Username (how other users will see you): 
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Password: 
                        <input type="password" name="password" />
                    </label>
                    <p></p>
                    <button className='SubmitButton'>Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default AccountCreation;
