import React, { useState } from 'react';
import Navbar from './Navbar';
import PhoneInput from 'react-phone-input-2';
import Footer from './footer'
import 'react-phone-input-2/lib/style.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Book = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zc5jr0o', 'template_vv9z2tq', form.current, {
                publicKey: '3tgV5Oy05IwJdB4Mo',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <div className='body'>
            <Navbar />
            <div style={{ marginBottom: '45px' }} className='form-response'>
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6 ">
                            <div className="card form-card">
                                <div className='form-bg'>
                                    <div className="card-body">
                                        <h2 className="card-title text-center mb-4">Book your ticket</h2>
                                        <form ref={form} onSubmit={sendEmail}>
                                            <div className="form-group">
                                                <div className="d-flex justify-content-between dropdowns">
                                                    <select className="form-control mr-2" name='time_slot' id="timeSlot" defaultValue="placeholder">
                                                        <option value="placeholder" disabled>-- Select Time slot --</option>
                                                        <option value="10:00 AM">10:00 AM</option>
                                                        <option value="12:00 PM">12:00 PM</option>
                                                        <option value="2:00 PM">2:00 PM</option>
                                                        <option value="4:00 PM">4:00 PM</option>
                                                        <option value="6:00 PM">6:00 PM</option>
                                                        <option value="10:00 PM">10:00 PM</option>
                                                    </select>
                                                    <select className="form-control" name='theatre' defaultValue="placeholder1" id="theatre">
                                                        <option value="placeholder1" disabled >-- Select Theatre --</option>
                                                        <option value="INOX: Himalaya Mall">INOX: Himalaya Mall</option>
                                                        <option value="Cinepolis: Nexus Ahmedabad One">Cinepolis: Nexus Ahmedabad One</option>
                                                        <option value="Wide Angle: Ahmedabad">Wide Angle: Ahmedabad</option>
                                                        <option value="PVR: Motera, Ahmedabad">PVR: Motera, Ahmedabad</option>
                                                        <option value="Rajhans Cinemas: Nikol">Rajhans Cinemas: Nikol</option>
                                                        <option value="City Gold Satellite: Ahmedabad">City Gold Satellite: Ahmedabad</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-group">
                                                    <label htmlFor="numberOfSeats">Number of Seats:</label>
                                                    <input type="number" min={1} className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input name='user_email' type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group d-flex justify-content-between phoneAndAge">
                                                <div className="form-control-container">
                                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                                    <PhoneInput
                                                        country={'in'}
                                                        value={phoneNumber}
                                                        onChange={setPhoneNumber}
                                                        inputStyle={{ width: '100%', height: '38px' }}
                                                    />
                                                </div>
                                                <div className="form-control-container">
                                                    <label htmlFor="age">Age:</label>
                                                    <input type="number" min={1} className="form-control" />
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '14px' }} className="form-group genders">
                                                <label>Select Gender:</label>
                                                <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off" required />
                                                <label style={{ marginLeft: '10px' }} className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>

                                                <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off" required />
                                                <label style={{ marginLeft: '10px' }} className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>
                                            </div>
                                            <button className="btn btn-primary btn-block">Book</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Book;
