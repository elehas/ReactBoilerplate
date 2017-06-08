var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation

$(document).foundation();

//Load styles
require('style!css!sass!AppStyles');

ReactDOM.render(
  <h2>Boilerplate Launched</h2>,
  document.getElementById('app')
);
