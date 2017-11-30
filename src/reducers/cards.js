export default (state = [], action) => {
	switch(action.type) {
		case 'CARDS_INIT':
			return state.length > 0 ? state : action.payload
		default:
			return state
	}
}
