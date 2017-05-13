const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const requestName = acc;
    requestName[type] = `${base}_${type}`;
    return requestName;
  }, {});
}

export default createRequestTypes;
