import React, { Component } from 'react';

class NavMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      event: false
    };
  }

  onClick = () => {
      this.setState({isOpen: !this.state.isOpen});
      if(this.state.event){
          this.setState({event: false});
          window.removeEventListener("click",this.handleEvent);
      }else{
          this.setState({event: true});
          window.addEventListener('click', this.handleEvent);
      }
  };


  handleEvent(ev) {
      ev.preventDefault();
      
  }

  render() {
    const burgerStyle = ['hamburger', 'hamburger--spin'];
    return <div>menu</div>;
  }
}

export default NavMenu;
