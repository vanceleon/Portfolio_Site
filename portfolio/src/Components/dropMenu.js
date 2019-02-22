import React from 'react';

const DropMenu = (props) => {
  return (
    <div className={props.isOpen ? 'menu-text--active' : 'menu-text--inactive'}>
      <a href='#myExperience'>My Journey</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
    </div>
  );
};
export default DropMenu;
