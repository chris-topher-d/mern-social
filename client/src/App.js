import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id='app'>
          <h1>MERN Social</h1>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
