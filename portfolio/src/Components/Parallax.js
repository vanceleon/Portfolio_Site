import React from 'react';
import { Parallax } from 'react-parallax';

const HeaderParallax = () => {
  return (
    <div className='parallax-container'>
      <Parallax
        className='parallax-headshot'
        bgImage={require('../img/harlem-brownstones-trees-pano.jpg')}
      >
        <div className='profile-name' style={{height: '300px'}}>
          <h1>Hi, I'm</h1>
          <h1>Vance Leon</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderParallax;
