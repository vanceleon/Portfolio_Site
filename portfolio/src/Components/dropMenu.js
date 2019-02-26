import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

const DropMenu = (props) => {
  return (
    <div className={props.isOpen ? 'menu-text--active' : 'menu-text--inactive'}>
      <a className='navLinks' href='#myExperience'>My Journey</a>
      <a className='navLinks' href='#projects'>Projects</a>
      <a className='navLinks' href='#contact'>Contact</a>
    </div>
  );
};
export default DropMenu;
