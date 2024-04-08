import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/278545277/original/1d86ca7c2cb1813326be3c50e506b9f81656b425/create-a-logo-for-your-pokemon-and-trainer-for-you.png" style={{ width: '250px', height: '250px' }} alt="logo" />
            <nav className="navigation">
                <ul >
                    <li><a href="xd">Accueil</a></li>
                    <li><a href="xd">Pokédex</a></li>
                    <li><a href="xd">Équipe</a></li>
                    <li><a href="xd">À Propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
