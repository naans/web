import React, {Component} from 'react'
import {
  Row, Col, Button, ButtonGroup, Form,
  Card, CardHeader, CardBody, Alert,
  CardTitle, CardText, CardImg
} from 'reactstrap'
import admin from '../../admin'

const fields = [{
	name: 'picture',
	type: 'picture',
	placeholder: 'Photo'
}, {
	name: 'description',
	type: 'text',
	placeholder: 'Description de la photo'
}]

export default admin({
	collection: 'slides',
	fields: fields,
	list: {
		Item: ({picture, description}) => (
			<Card>
			  <CardImg top width="100%" src={picture} />
			  <CardBody>
			    <CardText>{description}</CardText>
			  </CardBody>
			</Card>
		)
	},
	add: {
		title: 'Ajouter une nouvelle photo',
		initialValues: {}
	},
	edit: {
		title: 'Modifier une photo'
	},
	remove: {
		Message: () => <div>Etes vous sure de vouloir supprimer la photo ?</div>
	}
})
