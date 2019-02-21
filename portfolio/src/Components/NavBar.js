import React, { Component } from 'react';
import '../css/hamburger.css';

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
    if(this.state.isOpen){
        burgerStyle.push("is-active");
    }
    
    return (
      <div style={{ display: "flex" }} onClick={this.onClick}>
        <button className={burgerStyle.join(" ")} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

    ) 
  }
}

export default NavMenu;
