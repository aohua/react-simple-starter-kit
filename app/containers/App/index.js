import React, { PropTypes } from 'react';
// inject foundation
import '../../foundation-sites/scss/foundation.scss';

function App(props) {
  return (
    <div className="container">
      { props.children }
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
