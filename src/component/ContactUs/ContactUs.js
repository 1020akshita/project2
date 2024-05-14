import React from 'react'
import styles from './Contact.css'

const ContactUs = () => {

    return (

        <div className="contact-page">
            <section className="contact-section">
                <div className="container">
                    <h2>Contact Us</h2>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className='icons'>
                    <i class="fa-brands fa-facebook "></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <p>&copy; 2024 Creative Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;

