import React from 'react';
import './Contact.css';


const ContactMe = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src="/src/image/customer-service (1).png" alt=" profile" />
            </div>

            <div className="contact-section">

                <div className="contact-left">

                    <h1>Let's talk about everything!</h1>
                    <p>i'm currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src="/src/image/mail.png" alt="mail" />
                            <p>
                                web4dev2learning0@gmail.com
                            </p>
                        </div>
                        <div className="contact-detail">
                            <img src="/src/image/phone.png" alt="phone" /><p>
                                +8801886736932
                            </p>

                        </div>
                        <div className="contact-detail">
                            <img src="/src/image/google-maps.png" alt="location" />
                            <p>Wari,Dhaka,Bangladesh</p>
                        </div>

                    </div>

                </div>

                <form className="contact-right">
 <label htmlFor=""> Your Name</label>

                    <input type="text"  name="name" placeholder=" Enter Your Name" />

                    <label htmlFor=""> Your Email</label>
                    <input type="email" name="email" placeholder=" Enter Your Email" />

                    <label htmlFor=""> Your Message</label>
                    <textarea name="message"  rows="10"  placeholder=" Enter Your Message"></textarea>

                    <button type="submit"className='contact-submit'>Submit</button>


                </form>
            </div>



        </div>
    );
};

export default ContactMe;