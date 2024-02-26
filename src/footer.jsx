import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-3 d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center mb-3">
                    <a href="https://github.com/Priyansh749" target="_blank" rel="noopener noreferrer" className="btn reactIcons btn-dark  btn-floating mx-2">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/priyansh-bhavsar/" target="_blank" rel="noopener noreferrer" className="btn reactIcons btn-dark btn-floating mx-2">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/priyansh_.749" target="_blank" rel="noopener noreferrer" className="btn reactIcons btn-dark btn-floating mx-2">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="btn reactIcons btn-dark btn-floating mx-2">
                        <FaTwitter />
                    </a>
                </div>
                <div className="text-center">
                    <p>&copy; 2024 Movie Ticket Booking. All rights reserved.</p>
                    <p>Contact Me: priyansh.workemail@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
