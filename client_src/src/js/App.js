import React, { Component } from 'react';
import { 
  Switch, HashRouter as Router, 
  Route 
} from 'react-router-dom';

import Home from './containers/home';
import '../css/style.less';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <div className='container'>
      <Route exact path='/' component={ Home } />
      </div>
       </Switch>
      </Router>
    );
  }
}

