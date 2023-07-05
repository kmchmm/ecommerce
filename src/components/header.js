import React from 'react';


import { Link } from 'react-router-dom';

import logo from './images/logo.png';
import '../App.css';


export const Header = () => {
    return (
        <div className='App'>
            <header>
                <nav className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between'>
                        <img src={logo} alt="Icon Finder Cart"/>
                        <input type='search' placeholder='Search...'/>
                    </div>
                    <div>
                        <ul className='d-flex justify-content-between'>
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
                                <Link to="/cart">Your Cart</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;