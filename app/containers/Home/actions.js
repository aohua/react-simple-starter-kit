import { REPO } from './constants';

// action generator
function action(type, payload = {}) {
  return { type, ...payload };
}

export const fetchRepo = url => action(REPO.REQUEST, { url });
