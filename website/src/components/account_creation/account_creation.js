import React from 'react';
import './account_creation.css';
import { useState } from 'react'
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const goToNewPage = page => {
        navigate(page);
    };

    let homepage = '/';
    let accountpage = '/account_creation';

    return (

        <div className="page">

            <div className="HeaderBar">

                <div className = "Logo_Name">
                    <img className = "Logo" src={logo}/>
                    <p className = "Name">Hungry Chompers</p>
                </div>

                <div className = "HeaderButtonDiv">
                    <button className='HeaderButton' onClick={() => goToNewPage(homepage)} >Home</button>
                    <button className='HeaderButton'>About Us</button>
                    <button className='HeaderButton'>Contact</button>
                </div>

                <div className = "HeaderProfile">
                    <img className='ProfilePicture' src={blankProfile}/>
                </div>      
       
            </div>
        
        <div className="HomeContainer">
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
        </div>
    );
}

export default AccountCreation;
