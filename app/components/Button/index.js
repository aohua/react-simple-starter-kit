import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import styles from './styles.css';


function button(props) {
  const className = props.className ? `${styles.button} ${props.className}` : styles.button;

  return (
    <Button
      className={className}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      { Children.toArray(props.children) }
    </Button>
  );
}

button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default button;
