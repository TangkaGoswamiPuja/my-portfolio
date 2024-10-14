import React, { useRef } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import AboutMe from '../About/AboutMe';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right = '0';
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    }
    return (
               <div className="navbar">
                    <h1>PUJA</h1>
                    <img className='nav-open'  onClick={openMenu}  src="/src/image/list.png" alt="" />
                    <ul ref={menuRef}className='nav-menu'>
                        <img  onClick={closeMenu}  className='nav-close' src="/src/image/close.png" alt="" />
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