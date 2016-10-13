import { fromJS } from 'immutable';
import { REPO } from './constants';


const initialState = fromJS([]);

export default function (state = initialState, action) {
  switch (action.type) {
    case REPO.SUCCESS:
      return fromJS(action.repo);
    case REPO.FAILURE:
      return action.message;
    default:
      return state;
  }
}
