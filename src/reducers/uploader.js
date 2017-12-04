import {merge} from 'ramda'

// uploader = {
// 	uploading: Boolean
// }

export default (state = {shown: false, uploading: false}, action) => {
	switch(action.type) {
		case 'UPLOADER_START':
			return merge(state, {uploading: true})
		case 'UPLOADER_END':
			return merge(state, {uploading: false})
		default:
			return state
	}
}
