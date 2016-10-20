import { fromJS } from 'immutable';
import { CHANGE_USERNAME } from './constants';


const initialState = fromJS({
  userName: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('userName', action.name);
    default:
      return state;
  }
}

export default homeReducer;
