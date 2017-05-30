import { fromJS } from 'immutable';
import { CHANGE_LOADING_STATUS, REPO } from './constants';


const initialState = fromJS({
  isLoading: false,
  users: [],
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADING_STATUS:
      return state.set('userName', action.isLoading);
    case REPO.REQUEST:
      return state.set('isLoading', true);
    case REPO.FAILURE:
      return state.set('isLoading', false);
    case REPO.SUCCESS:
      return state.set('isLoading', false).set('users', action.repo.response.items);
    default:
      return state;
  }
}

export default globalReducer;
