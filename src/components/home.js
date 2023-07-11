import React from 'react';

import { Link } from 'react-router-dom';

import logo from './images/logo.png';

import '../App.css';

export const Home = () => {
    return (
        <div className='App'>
            <div className='home-container'>
                <section>
                    <div className='hc-first-section d-flex align-items-center justify-content-center'>
                        <h1>Home</h1>
                        <div className='underline'></div>
                        <div className='d-flex justify-content-center hc-box-wrapper'>
                            <div className='hc-box'></div>
                            <div className='hc-box'></div>
                            <div className='hc-box'></div>
                        </div>
                        <div>
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='hc-second-section'>
                        <h1>Featured Products</h1>
                        <div className='d-flex justify-content-center hc-box-wrapper'>
                            <div className='hc-box'>
                                <div>
                                    <div className='img-wrapper'>

                                    </div>
                                    <div>
                                        <h6>Product Name</h6>
                                        <h6>$100</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='hc-box'>
                                <div>
                                    <div className='img-wrapper'>

                                    </div>
                                    <div>
                                        <h6>Product Name</h6>
                                        <h6>$100</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='hc-box'>
                                <div>
                                    <div className='img-wrapper'>

                                    </div>
                                    <div>
                                        <h6>Product Name</h6>
                                        <h6>$100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='hc-third-section'>
                        <div className='newsletter d-flex justify-content-between'>
                            <div>
                                <h2>NEWSLETTER</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni error maiores earum qui ducimus quisquam aut commodi modi enim ipsa, perferendis molestiae laboriosam quam expedita deleniti unde quasi delectus debitis.</p>
                            </div>
                            <div className='d-flex align-items-center inputs'>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' placeholder='Email Address'/>
                                    <input type='submit' value="Subscribe"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='hc-fourth-section d-flex justify-content-between'>
                        <div>
                            <div className='hc-box'>
                                <div>
                                    <div className='img-wrapper'>

                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6>Product Name</h6>
                                            <h6>$100</h6>
                                        </div>
                                        <div>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bx-star' ></i>
                                            <i class='bx bx-star' ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='d-flex justify-content-between'>
                                <div className='hc-box'>
                                    <div>
                                        <div className='img-wrapper'>

                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <h6>Product Name</h6>
                                                <h6>$100</h6>
                                            </div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bx-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hc-box'>
                                    <div>
                                        <div className='img-wrapper'>

                                        </div>
                                        <div className='d-flex justify-content-between'> 
                                            <div>
                                                <h6>Product Name</h6>
                                                <h6>$100</h6>
                                            </div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bx-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='hc-box'>
                                    <div>
                                        <div className='img-wrapper'>

                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <h6>Product Name</h6>
                                                <h6>$100</h6>
                                            </div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bx-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hc-box'>
                                    <div>
                                        <div className='img-wrapper'>

                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <h6>Product Name</h6>
                                                <h6>$100</h6>
                                            </div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bx-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='hc-fifth-section'>
                        <div className='about-this-shop'>
                            <h1>About This Shop</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam aliquid, iusto non temporibus culpa amet explicabo sint ducimus, possimus ullam quibusdam incidunt aperiam quidem ipsam cumque sequi nesciunt rem.</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='location'>
                                <img src={logo} alt="" />
                                <div>
                                    <span>1717 Harrison St, San Francisco,</span>
                                    <br />
                                    <span>CA 94103, USA</span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around company-info'>
                                <div>
                                    <ul>
                                        <li>MAIN MENU</li>
                                        <li>
                                            <Link>Home</Link>
                                        </li>
                                        <li>
                                            <Link>About</Link>
                                        </li>
                                        <li>
                                            <Link>Shop</Link>
                                        </li>
                                        <li>
                                            <Link>Help</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>COMPANY</li>
                                        <li>The Company</li>
                                        <li>Careers</li>
                                        <li>Press</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>DISCOVER</li>
                                        <li>The Team</li>
                                        <li>Our History</li>
                                        <li>Brand Motto</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>FIND US ON</li>
                                        <li>Facebook</li>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;