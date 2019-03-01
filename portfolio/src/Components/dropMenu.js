import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

const DropMenu = props => {
  return (
    <div className={props.isOpen ? 'menu-text--active' : 'menu-text--inactive'} id='navContainer'>
      <div className='nav-subContainer'>
        <a className='navLinks' href='#projects' onClick={props.handleEvent}>
          Projects
        </a>
        <a
          className='navLinks'
          href='#myExperience'
          onClick={props.handleEvent}
        >
          My Journey
        </a>
        <a className='navLinks' href='#contact' onClick={props.handleEvent}>
          Contact
        </a>
      </div>
    </div>
  );
};
export default DropMenu;