import {append, tail, merge} from 'ramda'
import store from '../store'

const adding = () => setTimeout(() => 
	store.dispatch({type: 'ALERT_POP'})
, 3000)

export default (state = [], action) => {
	switch(action.type) {
		case 'ALERT_PUSH':
			adding()
			return append(merge(action.payload, {id: state.length}), state)
		case 'ALERT_POP':
			return tail(state)
		default:
			return state
	}
}
