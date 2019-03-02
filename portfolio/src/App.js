import React, { Component } from 'react';
import HeaderParallax from './Components/Parallax';
import NavMenu from './Components/NavBar';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
// import Quotes from './Components/Quotes';
import Footer from './Components/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <div className="App-Container"> */}

        <div className='header-view'>
          <NavMenu />
          <HeaderParallax />
        </div>
        <div className='portfolio-container'>
          {/* <Quotes /> */}
          <Projects />
          <Experience />

        </div>

        <Footer />
        {/* <div className='testing'>
          testing the text under image
        </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
