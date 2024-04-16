import React from 'react';
import './account_creation.css';
import { useState } from 'react'


function AccountCreation() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setpassword("");
            setemail("");
        }
    }
    return (
        <div classemail="container">
            <div classemail='WelcomeText'>
                <h1>Account Creation</h1>
                <p>To make an account please enter an password and password below.</p>
            </div>
            <div classemail='Creation'>
                {/* <form>
                    <label>
                        password:
                        <input type="text" email="password" />
                    </label>
                    <label>
                        Password:
                        <input type="password" email="password" />
                    </label>
                    <button classemail='SubmitButton'>Submit</button>
                </form> */}
                <form action="">
                    <input type="text" placeholder="email"
                    value={email} onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder="password"
                    value={password} onChange={(e) => setpassword(e.target.value)} />
                    <button type="submit"
                    onClick={handleOnSubmit}>submit</button>
                </form>
            </div>
        </div>
    );
}

export default AccountCreation;
