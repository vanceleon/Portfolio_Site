import React from 'react';
import { Parallax } from 'react-parallax';

const HeaderParallax = () => {
  return (
    <div className='parallax-container'>
      <Parallax
        className='parallax-headshot'
        strength={300}
        bgImage={require('../img/harlem-brownstones-trees-pano.jpg')}
      >
        <div className='profile-name'>
          <h1>Hi, I'm</h1>
          <h1>Vance Leon</h1>
        </div>
        <div style={{ height: '300px' }} />
      </Parallax>
    </div>
  );
};

export default HeaderParallax;
    