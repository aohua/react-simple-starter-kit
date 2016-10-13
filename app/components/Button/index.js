import React, { PropTypes, Children } from 'react';

function Button(props) {
  const className = props.className;

  return (
    <button className={`${className}`} type="button" onClick={props.onClick}>
      {Children.toArray(props.children)}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
