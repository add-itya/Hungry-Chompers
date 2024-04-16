import React from 'react';
import './account_creation.css';

function AccountCreation() {
    return (
        <div className="container">
            <div className='WelcomeText'>
                <h1>Account Creation</h1>
                <p>To make an account please enter an email and password below.</p>
            </div>
            <div className='Creation'>
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
                </form>
            </div>
        </div>
    );
}

export default AccountCreation;
