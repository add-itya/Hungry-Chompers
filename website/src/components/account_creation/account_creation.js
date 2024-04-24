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
    let aboutpage = '/about_us';
    let contactpage = '/contact';

    return (

        <div className="page">

            <div className="HeaderBar">

                <div className = "Logo_Name">
                    <img onClick={() => goToNewPage(homepage)} className = "Logo" src={logo}/>
                    <p onClick={() => goToNewPage(homepage)} className = "Name">Hungry Chompers</p>
                </div>

                <div className = "HeaderButtonDiv">
                    <button className='HeaderButton' onClick={() => goToNewPage(homepage)} >Home</button>
                    <button className='HeaderButton' onClick={() => goToNewPage(aboutpage)}>About Us</button>
                    <button className='HeaderButton' onClick={() => goToNewPage(contactpage)}>Contact</button>
                </div>

                <div className = "HeaderProfile">
                    <img className='ProfilePicture' src={blankProfile}/>
                </div>      
       
            </div>
        
            <div className="AccountContainer">

                <div className='TextInfoContainer'>
                    <h1 className="SiteText2">Create Your Account</h1>
                    <p className="SiteText">To make an account please enter an email and password below.</p>
                </div>

                <div className='SignUpWrapper'>
            
                    <form action="" className="AccountForm">

                        <div className="SignUpInfo">
                            <label class='SignUpLabel'> Email </label>
                            <input class="SignUpInput" type="text"  value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>

                        <div className="SignUpInfo">
                            <label class='SignUpLabel'> Username </label>
                            <input class="SignUpInput" type="text" />
                        </div>
                                            
                        <div className="SignUpInfo">
                            <label class='SignUpLabel'> Password </label>
                            <input class="SignUpInput" type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>

                        <div className="SignUpInfo">
                            <label class='SignUpLabel'> Choose your favorite cuisine </label>
                            <select class='CuisineDropdown' id="cars" name="cars">
                                <option value="Mexican">Mexican</option>
                                <option value="Italian">Italian</option>
                                <option value="Thai">Thai</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                        </div>

                        <div className="ButtonWrapper">
                            <button className="SignUpButton" type="submit" onClick={handleOnSubmit}>Sign Up</button>
                        </div>
                    
                    </form>

                    <div className="LinkHolder">
                        <p className="SiteText">Already have an account? <a href="/">Sign In</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AccountCreation;
