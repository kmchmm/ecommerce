import React from 'react';


import { Link } from 'react-router-dom';

import logo from './images/logo.png';
import '../App.css';


export const Header = () => {
    return (
        <div className='App'>
            <header>
                <nav className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center nav-left'>
                        <div className='d-flex justify-content-between logo-wrapper'>
                            <img src={logo} alt="Icon Finder Cart"/>
                        </div>
                        <div className='search-wrapper d-flex align-items-center'>
                            <i class='bx bx-search'></i>
                            <input type='search' placeholder='Search...'/>
                        </div>
                    </div>
                    <div className='nav-right'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                            <li>
                                <Link to="/cart" className='d-flex align-items-center'><i class='bx bxs-cart-alt' ></i> <span>Your Cart</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;