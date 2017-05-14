import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function App(props) {
  return (
    <div>
      { React.Children.toArray(props.children) }
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
