import { CHANGE_USERNAME } from './constants';

// action generator
function action(type, payload = {}) {
  return { type, ...payload };
}

export const changeUsername = name => action(CHANGE_USERNAME, { name });
