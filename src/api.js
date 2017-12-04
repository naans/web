import {merge} from 'ramda'
import {SubmissionError} from 'redux-form'
import store from './store'

const API_URL = 'http://localhost:3001'

const request = (method, uri, options = {}) => {
	if (options.body) {
		options.body = JSON.stringify(options.body)
	}
	return fetch(`${API_URL}${uri}`, merge({method}, options))
	.then(res => res.json())
	.catch(err => {
		store.dispatch({type: 'ALERT_PUSH', payload: {type: 'danger', content: err.message}})
		throw err
	})
	.then(res => {
		if (res._error)
	    	throw new SubmissionError(res)
		return res
	})
}

const headers = () => ({
	'Content-Type': 'application/json',
	'Authorization': 'Bearer ' + store.getState().user.token
})

export const get = (uri, options) => request('GET', uri, options)
export const put = (uri, data, options = {}) => 
	request('PUT', uri, merge({body: data, headers: headers()}, options))
export const post = (uri, data, options = {}) => 
	request('POST', uri, merge({body: data, headers: headers()}, options))
export const remove = (uri, data = {}, options = {}) => 
	request('DELETE', uri, merge({body: data, headers: headers()}, options))
