var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('styles');

var Results = function (props) {
  return(
    <div className="jumbotron col-sm-12 text-center"></div>
  );
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playerInfo: PropTypes.array.isRequired
}

module.exports = Results;
