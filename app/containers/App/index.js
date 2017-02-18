import React, { PropTypes } from 'react';

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
