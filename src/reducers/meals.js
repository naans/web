import {merge} from 'ramda'

export default (state = {items: []}, action) => {
	switch(action.type) {
		case 'MEALS_LOAD':
			return merge(state, {items: action.payload})
		default:
			return state
	}
}
