import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2';
import chat from '../../image/customer-service (1).png';
import mail from '../../image/mail.png';
import phone from '../../image/phone.png';
import map from '../../image/google-maps.png';


const ContactMe = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8ad14764-5a4f-47f4-8756-2f4d3592a244");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        //   console.log("Success", res);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      };
    return (
        <div id='c' className='contact'>
            <div data-aos="zoom-in-down"  data-aos-duration="3000"className="contact-title">
                <h1>Get in touch</h1>
                <img src={chat}  alt=" profile" />
            </div>

            <div className="contact-section">

                <div data-aos="zoom-out" data-aos-duration="2000" className="contact-left">

                    <h1>Let's talk about everything!</h1>
                    <p>i'm currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.</p>

                    <div className="contact-details">
                        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="contact-detail">
                            <img src={mail} alt="mail" />
                            <p>
                                web4dev2learning0@gmail.com
                            </p>
                        </div>
                        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="contact-detail">
                            <img src={phone} alt="phone" /><p>
                                +8801886736932
                            </p>

                        </div>
                        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="contact-detail">
                            <img src={map} alt="location" />
                            <p>Wari,Dhaka,Bangladesh</p>
                        </div>

                    </div>

                </div>

                <form onSubmit={onSubmit} className="contact-right">
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