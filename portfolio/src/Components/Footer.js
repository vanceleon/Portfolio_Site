import React from 'react';
import github from '../img/social/github-logo.png';
import linkedIn from '../img/social/linkedin-logo.png';


const Footer = () => {
    return (
        <div className="footer" id='contact'>
            <div className="footer-quote">
                Let's build a project and change the world together
            </div>
            <div className="contact-info">
                <a href='https://github.com/vanceleon'><img className='social-media' src={github} alt='githubLogo'/></a>
                <a href='https://www.linkedin.com/in/vanceleon/'><img className='social-media' src={linkedIn} alt='githubLogo'/></a>
            </div>
        </div>
    );
} 
export default Footer;