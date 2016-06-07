var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var ConfirmBattleContainer = require('ConfirmBattleContainer');
var PromptContainer = require('PromptContainer');
var ResultsContainer = require('ResultsContainer');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='playerOne' header='Player one'component={PromptContainer}></Route>
      <Route path='playerTwo/:playerOne' header='Player two' component={PromptContainer}></Route>
      <Route path='battle' component={ConfirmBattleContainer}></Route>
      <Route path='results' component={ResultsContainer}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
