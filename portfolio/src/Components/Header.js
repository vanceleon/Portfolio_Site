import React from 'react';
import HeaderParallax from './Parallax';

const Header = () => {
    return (
        <div className="title">
            <div className="header">

                {/* <img src={headshot} alt='headhshot' className='parallal-headShot'/>  */}
                {/* <div className="parallax-headshot"></div> */}
                <HeaderParallax/>
            </div>
        </div>
    )
}
export default Header;