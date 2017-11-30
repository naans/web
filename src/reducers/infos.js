import {merge} from 'ramda'

export default (state = {loaded: false}, action) => {
	if (action.type == 'INFOS_INIT')
		return merge(action.payload, {loaded: true})
	return state
}
