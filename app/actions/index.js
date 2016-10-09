const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

// generate different status for the action
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const requestName = acc;
    requestName[type] = `${base}_${type}`;
    return requestName;
  }, {});
}

export const REPO = createRequestTypes('REPO');


// action generator
function action(type, payload = {}) {
  return { type, ...payload };
}

export const fetchRepo = url => action(REPO.REQUEST, { url });
