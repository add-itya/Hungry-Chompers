import React from 'react';
import './contact.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import searchIcon from '../icons/search.svg';
import { useNavigate } from 'react-router-dom';

function Contact(){

    const navigate = useNavigate();

    const goToNewPage = page => {
        navigate(page);
    };

    let homepage = '/';
    let accountpage = '/account_creation';
    let aboutpage = '/about_us';
    let contactpage = '/contact';

    return(

        <div className="page">

            <div className="HeaderBar">

                <div className = "Logo_Name">
                    <img onClick={() => goToNewPage(homepage)} className = "Logo" src={logo}/>
                    <p onClick={() => goToNewPage(homepage)} className = "Name">Hungry Chompers</p>
                </div>

                <div className = "HeaderButtonDiv">
                    <button className='HeaderButton' onClick={() => goToNewPage(homepage)} >Home</button>
                    <button className='HeaderButton' onClick={() => goToNewPage(aboutpage)}>About Us</button>
                    <button className='HeaderButton'onClick={() => goToNewPage(contactpage)}>Contact</button>
                </div>

                <div className = "HeaderProfile">
                    <img className='ProfilePicture' src={blankProfile}/>
                </div>      
       
            </div>

            <div className="FavoriteContainer">

                <h1 className="FavoriteTitle">Here are your favorites!</h1>

                <div className = "FavoriteFoodsContainer">
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                    <p> Food 1</p>
                </div>
                
            </div>

      </div>
    )
}

    export default Contact;