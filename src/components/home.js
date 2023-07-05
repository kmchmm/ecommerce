import React from 'react';

import { Link } from 'react-router-dom';


import '../App.css';

export const Home = () => {
    return (
        <div className='App'>
            <div className='home-container d-flex align-items-center justify-content-center'>
                <h1>Home</h1>
                <div className='underline'></div>
                <div className='d-flex justify-content-center'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <Link to="/shop">Shop Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;