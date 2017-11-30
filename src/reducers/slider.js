import {merge} from 'ramda'

export default (state = {slides: [], activeIndex: 0, animating: false}, action) => {
	switch(action.type) {
		case 'SLIDER_SLIDES':
			return state.slides.length > 0 ? state :
				merge(state, {slides: action.payload})
		case 'SLIDER_EXITING':
			return merge(state, {animating: true})
		case 'SLIDER_EXITED':
			return merge(state, {animating: false})
		case 'SLIDER_NEXT':
			return state.animating ? state :
				merge(state, {activeIndex: (state.activeIndex + 1) % state.slides.length})
		case 'SLIDER_PREVIOUS':
			return state.animating ? state :
				merge(state, {activeIndex: (state.activeIndex + state.slides.length - 1) % state.slides.length})
		case 'SLIDER_GOTO_SLIDE':
			return state.animating ? state :
				merge(state, {activeIndex: action.payload})
		default:
			return state
	}
}
