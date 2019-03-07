import React, { Component } from 'react';
import HeaderParallax from './Components/Parallax';
import NavMenu from './Components/NavBar';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
// import Quotes from './Components/Quotes';
import {Grid} from '@material-ui/core';
import Footer from './Components/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Grid container direction='row' justify='center' alignItems='center'>
        <div className='App'>
          <NavMenu />
          <HeaderParallax />
          <div className='portfolio-container'>
            <Projects />
            <Experience />
          </div>
          <Footer />
        </div>
      </Grid>
    );
  }
}

export default App;
