import React from 'react'
import {reduxForm} from 'redux-form'
import {
	Card, CardHeader, CardBody, 
	Form, Alert
} from 'reactstrap'
import {Field} from '../Components'


export default ({name, fields, title, onSubmit, SubmitButton}) => reduxForm({
  form: name
})(({error, handleSubmit, submitting}) => (
	<Card>
	  <CardHeader><h3>{title}</h3></CardHeader>
	  <CardBody>
	  	{error && <Alert color="danger">{error}</Alert>}
		<Form onSubmit={handleSubmit}>
			{fields.map(field => <Field key={field.name} {...field} /> )}
			<SubmitButton type="submit" disabled={submitting} />
		</Form>
	  </CardBody>
	</Card>
))
