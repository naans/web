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

export default {
	collection: 'extras',
	title: 'Supplements',
	fields: fields,
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
}
