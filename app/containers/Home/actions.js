import { REPO, CHANGE_USERNAME } from './constants';

// action generator
function action(type, payload = {}) {
  return { type, ...payload };
}

export const fetchRepo = url => action(REPO.REQUEST, { url });
export const changeUsername = name => action(CHANGE_USERNAME, { name });
