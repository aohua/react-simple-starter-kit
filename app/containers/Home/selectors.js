/**
 * Home selectors
 */
import { createSelector } from 'reselect';

const selectHome = () => state => state.get('home');

const selectUsername = () => createSelector(
  selectHome(),
  homeState => homeState.get('userName')
);

const selectUsers = () => createSelector(
  selectHome(),
  homeState => homeState.get('users')
);

export {
  selectUsername,
  selectUsers,
};
