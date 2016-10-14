import { fromJS } from 'immutable';
import { REPO, CHANGE_USERNAME } from './constants';


const initialState = fromJS({
  repo: {},
  userName: 'abc',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case REPO.SUCCESS:
      return state.set('repo', action.repo);
    case REPO.FAILURE:
      return action.message;
    case CHANGE_USERNAME:
      return state.set('userName', action.name);
    default:
      return state;
  }
}

export default homeReducer;
