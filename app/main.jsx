require("./Assets/style.scss")

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

var App = require('./Components/App.jsx');
var Uppgjor = require('./Components/Uppgjor.jsx');

//React.render(<App/>, document.getElementById('body'))
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
<Route path="/uppgjor/:id/:stada" component={Uppgjor} />
  </Router>
, document.getElementById("body"))
