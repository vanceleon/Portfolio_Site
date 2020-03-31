import React from 'react';
import github from '../img/social/github-logo.png';
import linkedIn from '../img/social/linkedin-logo.png';
import Resume from '../pdf/VanceResume.pdf';
import resumePNG from '../img/social/Resume.png';

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className='footer-quote'>
        <h1>Californian to New Yorker</h1>
        <h1>Let's Connect, Find Great Food</h1>
        <h1>And Build A Project Along The Way</h1>
      </div>
      <div className='contact-info'>
        <a className='social-media' href='mailto:vanceleon44@gmail.com'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </a>

        <a href={Resume}>
          <img className='social-media' src={resumePNG} alt='githubLogo' />
        </a>
        <a href='https://github.com/vanceleon'>
          <img className='social-media' src={github} alt='githubLogo' />
        </a>

        <a href='https://www.linkedin.com/in/vanceleon/'>
          <img className='social-media' src={linkedIn} alt='resume' />
        </a>
      </div>
      {/* <div className="email"> */}
      {/* </div> */}
    </div>
  );
};
export default Footer;
