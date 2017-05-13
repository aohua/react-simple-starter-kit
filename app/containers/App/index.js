import React from 'react';
import PropTypes from 'prop-types';

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
