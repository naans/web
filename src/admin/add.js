import React from 'react'
import {push} from 'react-router-redux'
import {Button} from 'reactstrap'
import form from './form'
import store from '../store'
import {post} from '../api'

export default ({collection, urls, uris, fields, title, initialValues}) => {
	const Form = form({
		name: `${collection}_add`,
		fields, title, 
		SubmitButton: props => <Button color="success" {...props}>
			<i className="fa fa-plus" aria-hidden="true"></i> Ajouter
		</Button>
	})
	
	const submit = data => post(uris.collection, data)
		.then(() => store.dispatch(push(urls.list)))
	
	return () => <Form onSubmit={submit} initialValues={initialValues} />
}
