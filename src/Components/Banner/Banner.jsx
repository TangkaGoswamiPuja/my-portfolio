import React from 'react';
import './Banner.css';
import profile_img from '/src/image/IMG_20220423_231155_965.jpg';
const Banner = () => {
    return (
        <div className='banner' >
            <img src= {profile_img} alt="profile" />
            <h1>
              <span>I'm TANGKA GOSWAMI PUJA</span>, fronted developer based in Bangladesh.
            </h1>
            <p> I’m a fronted developer form Dhaka,Bangladesh.I have 2 years experience in web site design and building, also I am good at responsive design. I love to talk with you about our unique.
            </p>

            <div className="banner-action">
                <div className="banner-connect">
                    Connect with me
                </div>
                <div className="banner-resume">My Resume</div>
            </div>
            
        </div>
    );
};

export default Banner;