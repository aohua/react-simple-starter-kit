import { REPO } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case REPO.SUCCESS:
      return action.repo;
    case REPO.FAILURE:
      return action.message;
    default:
      return state;
  }
}
