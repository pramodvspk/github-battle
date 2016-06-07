var React = require('react');
var Results = require('Results');
var githubHelpers = require('githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false,
        })
      }.bind(this))
  },
  render: function() {
    return(
        <Results isLoading={this.state.isLoading} scores={this.state.scores} playersInfo={this.props.location.state.playersInfo}></Results>
    );

  }
});

module.exports = ResultsContainer;
