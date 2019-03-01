// import React, { Component } from 'react';
// import DropMenu from './dropMenu';
// import '../css/hamburger.css';

// class NavMenu extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isOpen: false,
//       event: false
//     };
//   }

//   // onClick = (ev) => {
//   //   this.setState({ isOpen: !this.state.isOpen });
//   //   // if(this.state.isOpen) {
//   //     console.log(ev);
//   //     if (ev.target.id !== 'navContainer') {
//   //       this.setState({ event: false });
//   //       window.removeEventListener('click', this.handleEvent);
//   //     }else {
//   //       if (this.state.event) {
//   //         this.setState({ event: false });
//   //         window.removeEventListener('click', this.handleEvent);
//   //       } else {
//   //         this.setState({ event: true });
//   //         window.addEventListener('click', this.handleEvent);
//   //       }
  
//   //     // }

//   //   }
//   // };


//   onClick = () => {
//     this.setState({isOpen: !this.state.isOpen});
//     if(this.state.event){
//         this.setState({event: false});
//         window.removeEventListener("click",this.handleEvent);
//     }else{
//         this.setState({event: true});
//         window.addEventListener('click', this.handleEvent);
//     }
// };

//   checkOutsideClick = (ev) => {
//     ev.preventDefault();
//       if(this.state.isOpen && ev.target.id !== 'navContainer' || ev.target.id === 'hamburger') {
//         this.setState({isOpen: false});
//         console.log('is false',ev);
//       }else {
//         this.onClick();
//         console.log('going to onclick');
//       }
    
//   }

//   handleEvent = (ev) => {
//     ev.preventDefault();
//     // console.log(ev);
//     console.log('handle event',this.state.isOpen);
//     console.log(ev.target)
//     // if(ev.target.id !== 'navContainer' || ) {
//     //   this.setState({isOpen: false});
//     // }
    
//   }

//   render() {
//     const burgerStyle = ['hamburger', 'hamburger--spin'];
//     if (this.state.isOpen) {
//       burgerStyle.push('is-active');
//     }

//     return (
//       <div
//         style={{ display: 'flex' }}
//         onClick={this.checkOutsideClick}
//         className='navMenu'
//       >
//         <button className={burgerStyle.join(' ')} type='button'>
//           <span className='hamburger-box' id='hamburger'>
//             <span className='hamburger-inner' />
//           </span>
//         </button>
//         <DropMenu
//           isOpen={this.state.isOpen}
//           handleEvent={this.state.handleEvent}
//           outsideClick={this.outsideClick}
//         />
//       </div>
//     );
//   }
// }

// export default NavMenu;

import React, { Component } from 'react';
import DropMenu from './dropMenu';
import '../css/hamburger.css';

class NavMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      event: false,
      checker: 0,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidUpdate(prevState){
    if (this.state.checker !== prevState.checker) {
      this.setState({checker:1})
      // console.log(this.state.checker);
      // this.fetchData(this.state.checker);
    }
  }

  onClick = () => {
      this.setState({isOpen: !this.state.isOpen});
      if(this.state.event){
        console.log('checking target id')
        this.setState({event: false});
        window.removeEventListener("click",this.handleEvent);
        console.log("click1")

        
      }else{
          this.setState({event: true});
          // console.log(this.state.event);
          console.log("click2")
          this.componentDidUpdate(this.state);
          window.addEventListener('click', this.handleEvent);
      }
  };

          // // this.setState({checker: 1});
          // this.setState((state) => {
          //   console.log(state)
          //   return {checker: state.checker + 1};

  handleEvent = (ev) => {
      ev.preventDefault();
      console.log(ev);
      // if(this.state.event) {
        console.log('remove ev')
        console.log(this.state.checker);
        if(this.state.event === true && (ev.target.id !== 'navContainer' || ev.target.id === 'hamburger')) {
            console.log('clicked outside')
        }
        // window.removeEventListener("click",this.handleEvent);
        // this.setState({isOpen; })
      }
  
  render() {
    const burgerStyle = ['hamburger', 'hamburger--spin'];
    if(this.state.isOpen){
        burgerStyle.push("is-active");
    }
    console.log('checking checker',this.state.checker);
    return (
      <div style={{ display: "flex" }} onClick={this.onClick} className='navMenu'>
        <button className={burgerStyle.join(" ")} type="button">
          <span className="hamburger-box"id='hamburger'>
            <span className="hamburger-inner" />
            {console.log("in render",this.handleEvent)}
          </span>
        </button>
        <DropMenu isOpen={this.state.isOpen} handleEvent={this.handleEvent}/>
      </div>

    ) 
  }
}

export default NavMenu;
