import React from 'react';
import { Parallax } from 'react-parallax';

const HeaderParallax = () => {
  return (
    <div className='parallax-container'>
      <Parallax
        className='parallax-headshot'
        bgImage={require('../img/harlem-brownstones-trees-pano.jpg')}

        strength={500}
      >
        {/* <div /> */}
        <div className="header-height"> 
        <div className='profile-name'>
          <h1>Hi, I'm</h1>
          <h2>Vance Leon</h2>
        </div>

        </div>
      </Parallax>
    </div>
  );
};

export default HeaderParallax;
