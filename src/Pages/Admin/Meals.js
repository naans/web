import React, {Component} from 'react'
import {
  Row, Col, Button, ButtonGroup, Form,
  Card, CardHeader, CardBody, Alert,
  CardTitle, CardText, CardImg
} from 'reactstrap'
import admin from '../../admin'
import Extras from './Extras'

const fields = [{
	name: 'name',
	type: 'text',
	placeholder: 'Nom de l\'article'
}, {
	name: 'picture',
	type: 'picture',
	placeholder: 'Photo'
}, {
	name: 'category',
	type: 'select',
	collection: 'categories',
	label: _ => _.name,
	placeholder: 'Categorie de l\'article'
}, {
	name: 'description',
	type: 'text',
	placeholder: 'Description de l\'article'
}, {
	name: 'price',
	type: 'text',
	placeholder: 'Prix de l\'article en EURO'
}]

export default admin({
	collection: 'meals',
	fields: fields,
	children: [Extras],
	list: {
		Item: ({name, picture, description}) => (
			<Card>
			  <CardImg top width="100%" src={picture} alt={name} />
			  <CardBody>
			    <CardTitle>{name}</CardTitle>
			    <CardText>{description}</CardText>
			  </CardBody>
			</Card>
		)
	},
	add: {
		title: 'Ajouter un article',
		initialValues: {}
	},
	edit: {
		title: 'Modifier un article'
	},
	remove: {
		Message: ({name}) => <div>Etes vous sure de vouloir supprimer l'article <strong>{name}</strong> ?</div>
	}
})
