import {merge} from 'ramda'

export default (state = {isOpen:true}, action) => {
	switch(action.type) {
		case 'TOGGLE_NAVBAR':
			return merge(state, {isOpen: !state.isOpen})
		default:
			return state
	}
}
