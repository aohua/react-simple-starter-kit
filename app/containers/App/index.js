import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsLoading } from './selectors';
import Loader from '../../components/Loader';

import './styles.css';

export class App extends PureComponent {
  render() {
    return (
      <div>
        {this.props.isLoading && <Loader />}
        { React.Children.toArray(this.props.children) }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading(),
});

export default connect(mapStateToProps)(App);
