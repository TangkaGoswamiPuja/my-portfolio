import React from 'react';
import './About.css';
import profile_img from '/src/image/IMG_20220423_231155_965.jpg';
import Skills from './Skills';

const AboutMe = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img className='red' src="/src/image/cool-background .png" alt=" profile" />
 </div>

 

         <div className="about-section">
                <div className="about-left">           
                         <img className='dp' src={profile_img} alt="profile" />
                </div>
                <div className="about-right">

                    <div className="about-para">
                        <p>
                            I’m a fronted developer form Dhaka,Bangladesh.I have 2 years experience in web site design and building, also I am good at responsive design. I love to talk with you about our unique.
                        </p>
                        <p>
                            I have a passion for web design and love to create for web and mobile devices. I have a strong foundation in web design and development. I am constantly learning and improving my skills.</p>
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