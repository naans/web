import {merge} from 'ramda'

const saveToken = token => sessionStorage.setItem('token', token)
const loadToken = () => sessionStorage.getItem('token')
const removeToken = () => sessionStorage.setItem('token', '')

export default (state = {token: null}, action) => {
	switch(action.type) {
		case 'USER_LOAD':
			return merge(state, {token: loadToken() || null})
		case 'USER_LOGIN':
			saveToken(action.payload)
			return merge(state, {token: action.payload})
		case 'USER_LOGOUT':
			removeToken()
			return merge(state, {token: null})
		default:
			return state
	}
}
