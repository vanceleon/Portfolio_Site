import React, { Component } from 'react';
import Header from './Components/Header';
import NavMenu from './Components/NavBar';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu/>
        <Header/>
      </div>
    );
  }
}

export default App;
