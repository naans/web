import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {path} from 'ramda'
import {Alert, Button} from 'reactstrap'
import {get, remove} from '../api'
import {Loading} from '../Components'

export default ({collection, urls, uris, Message}) => {
	const make = connect(
		state => path(['data', collection], state) || {loadingItem: true},
		dispatch => ({
		    navigateTo: uri => () => dispatch(push(uri)),
			initItem: () => dispatch({type: 'DATA_LOADING_ITEM', payload: {collection}}),
    		loadItem: item => dispatch({type: 'DATA_ITEM_LOADED', payload: {collection, item}})
		})
	)

	class Remove extends Component {
		componentWillMount() {
			const id = this.props.match.params[collection]
				, {initItem, loadItem, navigateTo} = this.props
			initItem()
			get(`${uris.item}${id}`).then(loadItem)
			.catch(navigateTo(urls.list))
		}
		remove() {
			const id = this.props.match.params[collection]
				, {initItem, navigateTo} = this.props
			initItem()
			remove(`${uris.item}${id}`)
			.then(navigateTo(urls.list))
		}
		render() {
			const {loadingItem, item, navigateTo} = this.props
			return ( loadingItem !== false ? <Loading /> :
			  <Alert color="warning">
			  	<Message {...item} />
			  	<Button color="danger" onClick={this.remove.bind(this)}>
			  	  <i className="fa fa-trash" aria-hidden="true"></i>{' '}
			      Oui, supprimer!
			  	</Button>{' '}
			  	<Button onClick={navigateTo(urls.list)}>
			      Non, Annuler
			  	</Button>
			  </Alert>
			)
		}
	}

	return make(Remove)
}
