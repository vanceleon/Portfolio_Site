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
                <a href='https://github.com/vanceleon'><img src={github} alt='githubLogo'/></a>
                <a href='https://www.linkedin.com/in/vanceleon/'><img src={linkedIn} alt='githubLogo'/></a>
                LinkedIn, github here
            </div>
        </div>
    );
} 
export default Footer;