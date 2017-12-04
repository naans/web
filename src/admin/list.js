import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {path} from 'ramda'
import {
  Row, Col, Button, ButtonGroup
} from 'reactstrap'
import {get} from '../api'
import {Loading} from '../Components'

export default ({collection, urls, uris, Item}) => {
	const make = connect(
		state => path(['data', collection], state) || {loadingItems: true},
		dispatch => ({
		    navigateTo: uri => () => dispatch(push(uri)),
	    	initCollection: () => dispatch({type: 'DATA_LOADING_COLLECTION', payload: {collection}}),
	    	loadCollection: items => dispatch({type: 'DATA_COLLECTION_LOADED', payload: {collection, items}})
		})
	)

	class List extends Component {
		componentWillMount() {
			const {initCollection, loadCollection} = this.props
			initCollection()
			get(uris.collection).then(loadCollection)
		}
		render() {
			const {loadingItems, items, navigateTo} = this.props
			return (
				<div>
				  <Button color="success" onClick={navigateTo(urls.add)}>
	          	    <i className="fa fa-plus" aria-hidden="true"></i> Ajouter
	          	  </Button>
				  <Row>
				  {loadingItems !== false ? <Loading /> : items.map(item => (
	          	    <Col key={item.id} xs="12" sm="6" md="4">
	                  <Item {...item} />
	                  <ButtonGroup className="pull-right">
	                  	<Button color="success" onClick={navigateTo(`${urls.edit}${item.id}`)}>
	                  	  <i className="fa fa-edit" aria-hidden="true"></i> Modifier
	                  	</Button>
		          		<Button color="danger" onClick={navigateTo(`${urls.remove}${item.id}`)}>
		          		  <i className="fa fa-trash" aria-hidden="true"></i> Supprimer
		          		</Button>
	                  </ButtonGroup>
	          	    </Col>
				  ))}
				  </Row>
				</div>
			)
		}
	}

	return make(List)
}
