import React from 'react';
import './About.css';
import profile_img from '/src/image/IMG_20220423_231155_965.jpg';
import Skills from './Skills';

const AboutMe = () => {
    return (
        <div id='a' className='about'>
            <div data-aos="fade-up-right" data-aos-duration="3000" className="about-title">
                <h1>About Me</h1>
                <img className='red' src="/src/image/cool-background .png" alt=" profile" />
 </div>

 

         <div className="about-section">
                <div data-aos="fade-down-right" data-aos-duration="3000" className="about-left">           
                         <img className='dp' src={profile_img} alt="profile" />
                </div>
                <div className="about-right">

                    <div data-aos="fade-down-left"  data-aos-duration="3000" className="about-para">
                        <p>
                       <b>I</b> am studying Computer Science at Dhaka City College under the <i>National University</i> of Bangladesh. Recently, I completed a Web Development Course from <i>Programming HERO</i>, where I learned skills like HTML, CSS, JavaScript, React.js, and Node.js.<br></br> I’m really passionate about front-end development, which means I love creating websites that are easy to use and look great on all devices.I have experience working with tools like React.js, JavaScript and Firebase for user authentication. <br></br> I’m also familiar with using Git and GitHub for version control, and VS Code for writing code. I enjoy using Bootstrap and Material UI to make websites look good on all screens, and I’ve used React Hook Form for handling forms, Swiper for sliders, and AOS for adding smooth animations to my websites. <br></br> I’m always excited to solve problems and make the user experience as simple and enjoyable as possible.I have a passion for web design and love to create for web and mobile devices.<br></br> I have a strong foundation in web design and development. I am constantly learning and improving my skills.</p>
                    </div>
                    
                     <div className="about-skills">

                     {/* <div>
    <Skills></Skills>
  </div> */}

                        <div className="about-skill">
                            <p>HTML & CSS </p> <hr style={{ width: "100%", margin: "10px 0" }} /></div>
                            <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "80%", margin: "10px 0" }} /></div>
                            <div className="about-skill">
                            <p>React JS</p> <hr style={{ width: "70%", margin: "10px 0" }} /></div>
                        </div>
                    </div>
                    </div> 
                   


                  

  

                {/* achivement */}
                
                {/* <div className="about-achievments">
                    <div className="about-achiv">
                        <h1>2+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <hr />
                    <div className="about-achiv">
                        <h1>10+</h1>
                        <p>project completed</p>
                    </div>
                    <hr />
                    <div className="about-achiv">
                        <h1>10+</h1>
                        <p>happy clients</p>
                    </div>
 
</div> */}

               
            
        </div>


    );
};

export default AboutMe;