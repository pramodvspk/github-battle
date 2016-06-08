var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('styles');
var UserDetails = require('UserDetails');
var UserDetailsWrapper = require('UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('MainContainer');
var Loading = require('Loading');

function StartOver () {
  return (
    <div className="col-sm-12">
      <Link to="/playerOne">
        <button type="button" className="btn btn-danger btn-lg" style={styles.space}>Start Over</button>
      </Link>
    </div>
  );
}

var Results = function (props) {
  if(props.isLoading === true) {
    return(
      <Loading text="One Moment" speed={100}></Loading>
    );
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  if(props.scores[0] === 0) {
    props.scores[0] = "0";
  }
  if(props.scores[1] === 0) {
    props.scores[1] = "0";
  }


  // Handling a tie
  if(props.scores[0] === props.scores[1]) {
    return(
      <div>
        <MainContainer>
          <h1>Its a Tie !!</h1>
        </MainContainer>
        <div className="col-sm-6 col-sm-offset-3 text-center">
          <StartOver></StartOver>
        </div>
      </div>
    );
  }

  return(
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver/>
    </MainContainer>
  );
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playerInfo: PropTypes.array.isRequired
}

module.exports = Results;
