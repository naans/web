import {merge} from 'ramda'

export default (state = {token: null}, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return merge(state, {token: action.payload})
		case 'USER_LOGOUT':
			return merge(state, {token: null})
		default:
			return state
	}
}
