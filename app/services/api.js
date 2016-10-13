import { Schema, normalize, arrayOf } from 'normalizr';
import { camelizeKeys } from 'humps';
import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

promise.polyfill();


const API_ROOT = 'https://api.github.com/';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return Object.assign({},
        normalize(camelizedJson, schema)
      );
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}

const repoList = new Schema('repoList');
const repo = new Schema('repo');

repoList.define({
  item: arrayOf(repo),
});


// api services
export const fetchRepo = url => callApi(url, repoList);
