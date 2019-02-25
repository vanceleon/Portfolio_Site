import React from 'react';
// import headshot from '../img/LowerManhattan.jpg';

const Header = () => {
    return (
        <div className="title">
            <div className="header">
                <h1>Hi, I'm</h1> 
                <h1>Vance Leon</h1> 
                {/* <img src={headshot} alt='headhshot' className='parallal-headShot'/>  */}
                <div className="parallax-headshot"></div>
            </div>
        </div>
    )
}
export default Header;