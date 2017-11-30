import {curry, merge} from 'ramda'

const API_URL = 'http://localhost:3001'

const request = curry((method, uri, options = {}) => {
	if (options.body) {
		options.body = JSON.stringify(options.body)
	}
	return fetch(`${API_URL}${uri}`, merge({
		method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}, options))
	.then(res => res.json())
})

export const get = request('GET')
export const put = request('PUT')
export const post = request('POST')
export const remove = request('DELETE')
