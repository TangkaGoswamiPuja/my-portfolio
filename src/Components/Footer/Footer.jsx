import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer-top'>
           <div className="footer-top-left">
           <h1>
            why should you hire me?
           </h1>
           <p> I am a frontend developer with 2 years of experience. I have worked on multiple projects and <br></br> have a good understanding of web development. I am a quick learner and can adapt to new  technologies easily.<br></br> I am passionate about coding and always  strive to deliver high-quality work. I am a team player and can work well with others. I am <br></br>also a good communicator and can explain complex concepts in simple terms. I am confident that I can add value to your team and help you achieve your goals.</p>

            </div>
<hr/>
            <div className="footer-top-right">
             <h1>PUJA</h1>
            <p>Frontend Developer</p>
           

                            <img src="/src/image/mail.png" alt="mail" />
                            <p>
                                web4dev2learning0@gmail.com
                            </p>
                        
                        </div>

           </div>

        </div>
    );
};

export default Footer;