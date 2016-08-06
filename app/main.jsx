require("./Assets/style.scss")

import React from 'react';
import ReactDOM from 'react';
import {Router, Route, hashHistory} from 'react-router';

var App = require('./Components/App.jsx');

//React.render(<App/>, document.getElementById('body'))
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('body'))
