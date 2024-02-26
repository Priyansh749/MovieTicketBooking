import React from 'react';
import Navbar from './Navbar';
import Footer from './footer'

const About = () => {
    return (
        <div className='body' style={{ margin: '0', padding: '0', overflowX: 'hidden' }}>
            <Navbar />
            <div style={{ padding: "20px", color: "#fff" }}>
                <header style={{ textAlign: "center", height: '200px', marginTop: '100px' }}>
                    <h1>Welcome to Movie Ticket Booking</h1>
                    <p>Bringing the joy of cinema to your fingertips!</p>
                </header>
            </div>
            <div style={{ backgroundColor: '#141414' }}>
                <div className="row" style={{ marginLeft: '130px' }}>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body" style={{ width: '250px' }}>
                                <h2>About Us</h2>
                                <p>Movie Ticket Booking is a revolutionary platform designed to make booking tickets for your favorite movies a breeze. Whether you're planning a solo movie night or a group outing with friends and family, we've got you covered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body" style={{ width: '250px' }}>
                                <h2>Our Mission</h2>
                                <p>Our mission is simple - to enhance your movie-going experience by providing a seamless, convenient, and hassle-free ticket booking service. We strive to ensure that you spend less time worrying about tickets and more time enjoying the magic of cinema.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body" style={{ width: '250px' }}>
                                <h2>Why Choose Us?</h2>
                                <ul>
                                    <li>Easy Booking Process: Our user-friendly interface makes booking tickets a breeze.</li>
                                    <li>Wide Selection: Choose from a vast array of movies and showtimes.</li>
                                    <li>Convenience: Book tickets anytime, anywhere, from any device.</li>
                                    <li>Customer Support: Our dedicated support team is here to assist you with any queries or concerns.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div >
    );
}

export default About;
