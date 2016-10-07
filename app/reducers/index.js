import { combineReducers } from 'redux';

import repoReducer from './reducer_repo';


const rootReducer = combineReducers({
  repo: repoReducer
});

export default rootReducer;
