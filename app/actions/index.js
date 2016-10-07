const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

//generate different status for the action
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const REPO = createRequestTypes('REPO')


// action generator
function action(type, payload = {}) {
  return {type, ...payload}
}

export const fetchRepo = (url) => action(REPO.REQUEST, {url})
