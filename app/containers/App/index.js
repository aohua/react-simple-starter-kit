import React, { PropTypes } from 'react';
// inject foundation
import '../../foundation/scss/foundation.scss';

function App(props) {
  return (
    <div className="container">
      { React.Children.toArray(props.children) }
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
