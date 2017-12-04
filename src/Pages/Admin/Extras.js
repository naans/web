import React from 'react'
import {Route, Switch, Redirect} from 'react-router'
import {
  Row, Col, Button, ButtonGroup, Form,
  Card, CardHeader, CardBody, Alert,
  CardTitle, CardText, CardImg
} from 'reactstrap'
import admin from '../../admin'

const fields = [{
	name: 'name',
	type: 'text',
	placeholder: 'Nom du supplement'
}, {
	name: 'price',
	type: 'text',
	placeholder: 'Prix de du supplement en EURO'
}]

const Admin = ({match}) => {
	const id = match.params.meal
	const TheAdmin = admin({
		collection: 'extras',
		fields: fields,
		urls: {
			list: `/admin/meals/edit/${id}`,
			add: `/admin/meals/edit/${id}/extras/add`,
			edit: `/admin/meals/edit/${id}/extras/edit`,
			remove: `/admin/meals/edit/${id}/extras/remove/`
		},
		uris: {
			collection: `/meals/${id}/extras`,
			item: `/extras/`
		},
		list: {
			Item: ({name, price}) => (
				<Card>
				  <CardBody>
				    <CardTitle>{name}</CardTitle>
				    <CardText>{price} &euro;</CardText>
				  </CardBody>
				</Card>
			)
		},
		add: {
			title: 'Ajouter un supplement',
			initialValues: {}
		},
		edit: {
			title: 'Modifier un supplement',
		},
		remove: {
			Message: ({name}) => <div>Etes vous sure de vouloir supprimer le supplement <strong>{name}</strong> ?</div>
		}
	})

	return <div>
	  <br/>
	  <h2>Supplements</h2>
      <TheAdmin />
	</div>
}

export default () => (
	<Switch>
	    <Route path="/admin/meals/edit/:meal" component={Admin}/>
	</Switch>
)
