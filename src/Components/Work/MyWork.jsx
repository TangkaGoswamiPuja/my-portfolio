import React from 'react';
import './MyWork.css';
import '../About/About.css';
import image1 from '../../image/1.png';
import image2 from '../../image/2.png';
import image3 from '../../image/3.png';
import image4 from '../../image/4.png';
import banner from '../../image/cool-background .png';

const MyWork = () => {
    return (
        <div id='m' className='about'>

            <div data-aos="fade-up-left" data-aos-duration="3000" className="about-title ">
                <h1>My work</h1>
                <img className='red' src={banner} alt=" profile" />
            </div>

            <div className='works'>

                <div data-aos="flip-left" data-aos-duration="2000">
                    <a href='https://th-assignment-6b9bb.web.app/'>
                        <img className='work-img' src={image1} alt="" /></a>
                </div>
                <div data-aos="flip-right" data-aos-duration="2000">
                    <a href='https://country-project-5fb81.web.app/
'><img className='work-img' src={image2} alt="" /></a>
                </div>

                <div data-aos="flip-left" data-aos-duration="2000"> <a href='https://job-portal-11.web.app/'><img className='work-img' src={image3} alt="" /></a></div>

                <div data-aos="flip-right" data-aos-duration="2000"><a href='https://doctor-test-bb057.web.app
'>  <img className='work-img' src={image4} alt="" /></a></div>
            </div>

        </div>
    );
};

export default MyWork;