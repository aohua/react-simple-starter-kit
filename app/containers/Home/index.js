import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../../components/Button/index';
import { fetchRepo } from './actions';
import { selectHome } from './selectors';

export class Home extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('Props----------->', nextProps);
  }

  render() {
    return (
      <Button className="button alert" onClick={() => this.props.handleBtnOnClick('search/repositories?q=react+language:javascript&sort=stars&order=desc')}>
        <div>Hello world!</div>
      </Button>
    );
  }
}

Home.propTypes = {
  handleBtnOnClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repo: selectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleBtnOnClick: url => dispatch(fetchRepo(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
