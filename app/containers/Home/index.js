import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../../components/Button/index';
import { fetchRepo, changeUsername } from './actions';
import { selectHome, selectUsername } from './selectors';

export class Home extends Component {

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <section>
        <input
          id="username"
          type="text"
          placeholder="..."
          value={this.props.userName}
          onChange={this.props.onChangeUsername}
        />
        <Button className="button alert" onClick={() => this.props.handleBtnOnClick('search/repositories?q=react+language:javascript&sort=stars&order=desc')}>
          <div>Hello world!</div>
        </Button>
      </section>
    );
  }
}

Home.propTypes = {
  handleBtnOnClick: PropTypes.func,
  userName: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repo: selectHome(),
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
