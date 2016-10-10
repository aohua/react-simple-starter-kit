import React, { PropTypes, Children } from 'react';

import styles from './styles.scss';

function Button(props) {
  const className = props.className || styles.button;

  return (
    <button className={className} type="button" onClick={props.onClick}>
      {Children.toArray(props.children)}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
