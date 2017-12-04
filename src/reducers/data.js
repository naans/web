import {mergeDeepRight} from 'ramda'

// data = {
// 	collectionA: {
// 		loadingItems: Boolean,
// 		loadingItem: Boolean,
// 		items: [Resource],
// 		item: Resource
// 	},
// 	collectionB: ...,
// 	...
// }

export default (state = {}, action) => {
	const data = {}
		, {collection, items, item} = action.payload || {}
	switch(action.type) {
		case 'DATA_LOADING_COLLECTION':
			data[collection] = {loadingItems: true, items: []}
			return mergeDeepRight(state, data)
		case 'DATA_COLLECTION_LOADED':
			data[collection] = {loadingItems: false, items}
			return mergeDeepRight(state, data)
		case 'DATA_LOADING_ITEM':
			data[collection] = {loadingItem: true}
			return mergeDeepRight(state, data)
		case 'DATA_ITEM_LOADED':
			data[collection] = {loadingItem: false, item}
			return mergeDeepRight(state, data)
		default:
			return state
	}
}
