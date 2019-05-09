import React, { Component } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';

/* Mother of components. 
Renderar navigationskomponenten som i sin tur renderar andra komponenter. */
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent/>
      </div>
    );
  }
}

export default App;
