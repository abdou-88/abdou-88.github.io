import React, { useContext } from 'react';
import { FaRegSmile } from "react-icons/fa";
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import textureBG from '../../assets/img/textureBG.jpg';
   
function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body"  style={{ backgroundImage: `url(${textureBG})` }}
>
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}<FaRegSmile/><br></br><br></br></p>
                    
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
                
            </div>
            
        </div>

    )
}

export default About
