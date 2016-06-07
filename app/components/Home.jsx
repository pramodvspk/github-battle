var React = require('react');
var transparentBg = require('styles').transparentBg;
var Router= require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className="lead">Fancy motto</p>
        <Link to='/playerOne'>
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
