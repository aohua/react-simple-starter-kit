import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/index';
import { fetchRepo } from '../../actions';

function Home(props) {
  return (
    <Button onClick={() => props.handleBtnOnClick('search/repositories?q=react+language:javascript&sort=stars&order=desc')}>
      <div>Hello world!</div>
    </Button>
  );
}

Home.propTypes = {
  handleBtnOnClick: PropTypes.func,
};

function mapStateToProps({ repo }) {
  return { repo };
}

function mapDispatchToProps(dispatch) {
  return {
    handleBtnOnClick: url => dispatch(fetchRepo(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
