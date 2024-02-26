import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpeg'

const Navbar = () => {
    return (
        <div className='navigation'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link style={{ color: 'white' }} className="navbar-brand" to="/">
                        Movie Ticket Booking
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='navbarLinks' to="/about">about us</Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav >
        </div >
    );
}

export default Navbar;