import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import AboutMe from '../About/AboutMe';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
    return (
               <div className="navbar">
                    <h1>PUJA</h1>
                    <ul className='nav-menu'>
                     <li><AnchorLink  className='an-link' offset={50} href='#b'>Home</AnchorLink></li>
                    <li><AnchorLink   className='an-link' offset={50} href='#a'>About me</AnchorLink></li>
                    <li><AnchorLink   className='an-link' offset={50} href='#m'>My work</AnchorLink></li>
                    <li><AnchorLink   className='an-link' offset={50} href='#b'>Portfolio</AnchorLink></li>
                    <li><AnchorLink   className='an-link' offset={50} href='#c'>Contact</AnchorLink></li>
                    </ul>
                    <div className='nav-connect'><AnchorLink   className='an-link' offset={50} href='#c'> Connect with me</AnchorLink> </div>
                </div>  
        
    );
};

export default Navbar;