import React from 'react'
import {connect} from 'react-redux'
import {merge, path} from 'ramda'
import {Input} from 'reactstrap'
import Loading from '../Loading'
import {get} from '../../api'

export default ({collection, label, name, value, onChange}) => {
	const make = connect(
		state => path(['data', collection], state) || {loadingItems: true},
		dispatch => ({
	    	init: () => dispatch({type: 'DATA_LOADING_COLLECTION', payload: {collection}}),
	    	load: items => dispatch({type: 'DATA_COLLECTION_LOADED', payload: {collection, items}})
		})
	)

	class Select extends React.Component {
		componentWillMount() {
			const {init, load} = this.props
			init()
			get(`/${collection}`).then(load)
			if (value.id) 
				onChange(value.id)
		}
		render() {
			const {loadingItems, items} = this.props
			return (loadingItems ? <Loading /> :
				<Input type="select" name={name} value={value} onChange={onChange}>
				{items.map(item => <option key={item.id} value={item.id}>{label(item)}</option>)}
				</Input>
			)
		}
	}

	Select = make(Select)

	return <Select />
}
