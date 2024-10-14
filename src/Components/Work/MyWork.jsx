import React from 'react';
import './MyWork.css';
import '../About/About.css';

const MyWork = () => {
    return (
        <div id='m' className='about'>

            <div data-aos="fade-up-left" data-aos-duration="3000" className="about-title ">
                <h1>My work</h1>
                <img className='red' src="/src/image/cool-background .png" alt=" profile" />
            </div>

            <div className='works'>

                <div data-aos="flip-left" data-aos-duration="2000"><a href='https://th-assignment-6b9bb.web.app/'>
                    <img className='work-img' src="/src/image/Screenshot 2024-10-13 191129.png" alt="" /></a>
                </div>
                <div data-aos="flip-right"  data-aos-duration="2000">
                    <a href='https://country-project-5fb81.web.app/
'><img className='work-img' src="/src/image/Screenshot 2024-10-13 191201.png" alt="" /></a>
                </div>

                <div data-aos="flip-left"  data-aos-duration="2000"> <a href='https://job-portal-11.web.app/'><img className='work-img' src="/src/image/Screenshot 2024-10-13 191325.png" alt="" /></a></div>
                
                <div data-aos="flip-right"  data-aos-duration="2000"><a href='https://doctor-test-bb057.web.app
'>  <img className='work-img' src="/src/image/Screenshot 2024-10-13 191410.png" alt="" /></a></div>
            </div>

        </div>
    );
};

export default MyWork;