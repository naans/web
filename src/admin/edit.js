import React from 'react'
import {push} from 'react-router-redux'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import {path, merge} from 'ramda'
import form from './form'
import store from '../store'
import {get, put} from '../api'
import {Loading} from '../Components'
import admin from './'

export default ({collection, children, urls, uris, fields, title}) => {
	children = children || []
	const Form = form({
		name: `${collection}_edit`,
		fields, title,
		SubmitButton: props => <Button color="success" {...props}>
			<i className="fa fa-plus" aria-hidden="true"></i> Sauvegarder
		</Button>
	})

	const make = connect(
		state => path(['data', collection], state) || {loadingItem: true},
		dispatch => ({
		    navigateTo: uri => () => dispatch(push(uri)),
			initItem: () => dispatch({type: 'DATA_LOADING_ITEM', payload: {collection}}),
    		loadItem: item => dispatch({type: 'DATA_ITEM_LOADED', payload: {collection, item}})
		})
	)

	class Edit extends React.Component {
		componentWillMount() {
			const id = this.props.match.params[collection] || ''
				, {initItem, loadItem, navigateTo} = this.props
			console.log(this.props.match.params)
			initItem()
			get(`${uris.item}${id}`).then(loadItem)
			.catch(navigateTo(urls.list))
		}
		
		submit(data) {
			const id = this.props.match.params[collection] || ''
			return put(`${uris.item}${id}`, data)
			.then(() => store.dispatch(push(urls.list)))
		}

		render() {
			const {loadingItem, item} = this.props
			return (loadingItem !== false ? <Loading /> :
				<div>
				  <Form initialValues={item} onSubmit={this.submit.bind(this)} />
				</div>
			)
		}
	}

	return make(Edit)
}
