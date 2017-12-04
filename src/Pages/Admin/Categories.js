import React, {Component} from 'react'
import {
  Row, Col, Button, ButtonGroup, Form,
  Card, CardHeader, CardBody, Alert,
  CardTitle, CardText, CardImg
} from 'reactstrap'
import admin from '../../admin'

const fields = [{
	name: 'name',
	type: 'text',
	placeholder: 'Nom de la categorie'
}, {
	name: 'picture',
	type: 'picture',
	placeholder: 'Photo'
}, {
	name: 'description',
	type: 'text',
	placeholder: 'Description de la categorie'
}, {
	name: 'showOnNavbar',
	type: 'checkbox',
	placeholder: 'Afficher dans la bar de navigation.'
}, {
	name: 'showOnHomePage',
	type: 'checkbox',
	placeholder: 'Afficher dans la page d\'acceuil.'
}]

export default admin({
	collection: 'categories',
	fields: fields,
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
		title: 'Ajouter une nouvelle categorie',
		initialValues: {
		  	name: '',
		  	description: '',
		  	showOnNavbar: false,
		  	showOnHomePage: true
		}
	},
	edit: {
		title: 'Modifier une categorie'
	},
	remove: {
		Message: ({name}) => <div>Etes vous sure de vouloir supprimer la categorie <strong>{name}</strong> avec tous les repas dedans ?</div>
	}
})
