import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent';
import DashboardScreen from './screens/DashboardScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';

import './App.css';

/* Mother of components. 
Renderar navigationskomponenten som i sin tur renderar andra komponenter. */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBarComponent/>

          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/user" component={UserScreen} />
          <Route exact path="/user/:id" component={UserScreen} />
        </Router>
      </div>
    );
  }
}

export default App;
