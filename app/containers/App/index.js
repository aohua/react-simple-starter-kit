import React, { PropTypes } from 'react';

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
