import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchRepo, changeUsername } from './actions';
import { selectUsername } from './selectors';

export class Home extends Component {
  render() {
    return (
      <section>
        <input
          id="username"
          type="text"
          placeholder="React Simple Starter Kit"
          value={this.props.userName}
          onChange={this.props.onChangeUsername}
        />
      </section>
    );
  }
}

Home.propTypes = {
  userName: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userName: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleBtnOnClick: url => dispatch(fetchRepo(url)),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
