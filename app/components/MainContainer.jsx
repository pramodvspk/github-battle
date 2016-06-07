var React = require('react');
var styles = require('styles');

function MainContainer (props) {
  return(
    <div className="col-sm-8 col-sm-offset-2 jumbotron text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  );
}

module.exports = MainContainer;
