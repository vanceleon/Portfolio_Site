import React from 'react';
import github from '../img/social/github-logo.png';
import linkedIn from '../img/social/linkedin-logo.png';
import Resume from '../pdf/VanceLeon.pdf';
import resumePNG from '../img/social/Resume.png';

const Footer = () => {
    return (
        <div className="footer" id='contact'>
            <div className="footer-quote">
                <h1>Californian to New Yorker</h1>
                <h1>Let's Find Great Food</h1>
                <h1>And Build A Project Along The Way</h1>
                <a href="mailto:vanceleon44@gmail.com">Send me an email</a> 
            </div>
            <div className="contact-info">
                <a href={Resume}><img className='social-media' src={resumePNG} alt='githubLogo'/></a>
                <a href='https://github.com/vanceleon'><img className='social-media' src={github} alt='githubLogo'/></a>

                <a href='https://www.linkedin.com/in/vanceleon/'><img className='social-media' src={linkedIn} alt='resume'/></a>

            </div>
            {/* <div className="email"> */}
            {/* </div> */}
        </div>
    );
} 
export default Footer;