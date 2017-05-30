import { camelizeKeys } from 'humps';
import fetch from 'isomorphic-fetch';


const API_ROOT = 'https://api.github.com';
const SEARCH_API_ROOT = `${API_ROOT}/search`;
const SEARCH_USER_API_ROOT = `${SEARCH_API_ROOT}/users`;

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      return camelizedJson;
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}


// api services
export const fetchRepo = name => callApi(`${SEARCH_USER_API_ROOT}?q=${name}`);
