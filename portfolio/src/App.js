import React, { Component } from 'react';
import Header from './Components/Header';
import NavMenu from './Components/NavBar';
import Experience from './Components/Experience';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header-view'>
          <NavMenu />
          <Header />
        </div>
        <Experience />

        {/* <div className='testing'>
          testing the text under image
        </div> */}
      </div>
    );
  }
}

export default App;
