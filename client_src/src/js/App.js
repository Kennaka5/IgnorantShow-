import React, { Component } from 'react';
import { 
  Switch, HashRouter as Router, 
  Route 
} from 'react-router-dom';

import Home from './containers/home';
import Article from './containers/article';
import '../sass/main.scss';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <div className='container'>
      <Route exact path='/' component={ Home } />
      <Route path='/article/:id' component= {Article} />
      </div>
       </Switch>
      </Router>
    );
  }
}

