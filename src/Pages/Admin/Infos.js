import React, {Component} from 'react'
import {
  Row, Col, Button, ButtonGroup, Form,
  Card, CardHeader, CardBody, Alert,
  CardTitle, CardText, CardImg
} from 'reactstrap'
import {edit} from '../../admin'
import {INFOS_ID} from '../../config'

const fields = [{
	name: 'halal',
	type: 'text',
	placeholder: 'Note que la viande est Halal'
}, {
	name: 'address',
	type: 'text',
	placeholder: 'Adresse'
}, {
	name: 'phone',
	type: 'text',
	placeholder: 'Telephone'
}, {
	name: 'openingTime',
	type: 'text',
	placeholder: 'Les horaires'
}, {
	name: 'shipping',
	type: 'text',
	placeholder: 'Livraison'
}, {
	name: 'payment',
	type: 'text',
	placeholder: 'Moyens de paiement'
}, {
	name: 'facebook',
	type: 'text',
	placeholder: 'Lien de la page facebook'
}, {
	name: 'google',
	type: 'text',
	placeholder: 'Lien de la page sur Google'
}]

export default edit({
	collection: 'infos',
	fields: fields,
	title: 'Modifier les informations',
	urls: {
		list: '/admin'
	},
	uris: {
		item: `/infos/${INFOS_ID}`
	}
})
