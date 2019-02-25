import React from 'react';
import { Parallax, Background } from 'react-parallax';
import headshot from '../img/LowerManhattan.jpg';

const HeaderParallax = () => {
  // if(headshot) {
  return (
    <div className='parallax-container'>
      <Parallax strength={300}>
        <Background className='custom-bg'>
          <h1>Hi, I'm</h1>
          <h1>Vance Leon</h1>
          <img src={headshot} alt='headhshot' className='parallal-headShot'/>
        <div style={{ height: '200px' }} />
        </Background>
      </Parallax>
    </div>
  );

  // }else{
  //     return (
  //         <div>Loading...</div>
  //     )
  // }
};

export default HeaderParallax;
