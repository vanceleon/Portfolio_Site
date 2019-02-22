import React from 'react';
import github from '../img/social/github-logo.png';
import linkedIn from '../img/social/linkedin-logo.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-quote">
                Closing quote here
            </div>
            <div className="contact-info">
                <img src={github} alt='githubLogo'/>
                <img src={linkedIn} alt='githubLogo'/>
                LinkedIn, github here
            </div>
        </div>
    );
} 
export default Footer;