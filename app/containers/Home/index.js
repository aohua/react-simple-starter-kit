import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { Avatar } from 'react-toolbox/lib/avatar';

import styles from './styles.css';
import { changeUsername } from './actions';
import { fetchRepo } from '../App/actions';
import { selectUsername } from './selectors';
import { selectUsers } from '../App/selectors';
import Button from '../../components/Button';
import Input from '../../components/Input';

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.renderUsers = this.renderUsers.bind(this);
  }
  renderUsers() {
    const { users } = this.props;
    return users.map(user =>
      <ListItem
        key={user.id}
        className={styles.listItem}
        caption={user.login}
        legend={`${user.score}`}
        rightIcon="star"
      >
        <Avatar image={`${user.avatarUrl}`} />
      </ListItem>);
  }
  render() {
    const { userName, onChangeUsername, handleBtnOnClick, users } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <Input
            id="username"
            type="text"
            label="Search"
            placeholder="React Simple Starter Kit"
            value={userName}
            className={styles.searchInput}
            onChange={onChangeUsername}
          />
          <Button
            className={styles.searchButton}
            onClick={handleBtnOnClick.bind(this, userName)}
          >OK</Button>
        </div>
        <div className={styles.contentWrapper}>
          <List>
            <ListSubHeader className={styles.listSubHeader} caption="Explore users" />
            { users.length > 0 ? this.renderUsers() : <ListItem
              className={styles.listItem}
              caption="No Results"
              legend="Please try again"
            /> }
          </List>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  userName: PropTypes.string,
  onChangeUsername: PropTypes.func,
  handleBtnOnClick: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = createStructuredSelector({
  userName: selectUsername(),
  users: selectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleBtnOnClick: name => dispatch(fetchRepo(name)),
    onChangeUsername: value => dispatch(changeUsername(value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
