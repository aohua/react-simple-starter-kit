import { CHANGE_LOADING_STATUS, REPO } from './constants';

// action generator
function action(type, payload = {}) {
  return { type, ...payload };
}

export const fetchRepo = name => action(REPO.REQUEST, { name });
export const changeLoadingStatus = isLoading => action(CHANGE_LOADING_STATUS, { isLoading });
