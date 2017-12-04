import React from 'react'
import { Field } from 'redux-form'
import {
	FormGroup, FormFeedback, Input, Label
} from 'reactstrap'
import Uploader from './Uploader'
import Select from './Select'

const FieldInput = ({input, placeholder, type, meta: { touched, error }, collection, label}) => {
	switch(type) {
		case 'checkbox':
			return (
				<FormGroup check>
				  <Label check>
				    <Input {...input} type={type} />
				    {placeholder}
				  </Label>
			      {error && <FormFeedback>{error}</FormFeedback>}
				</FormGroup>
			)
		case 'picture':
			return (
			  <FormGroup>
				<Uploader {...input} />
				{error && <p className="text-danger">{error}</p>}
			  </FormGroup>
			) 
		case 'select':
			return (
			  <FormGroup>
				<Select collection={collection} label={label} {...input} />
				{error && <p className="text-danger">{error}</p>}
			  </FormGroup>
			)
		default:
			return (
			  <FormGroup>
			    <Input valid={(touched && error) ? false : undefined} {...input} placeholder={placeholder} type={type} />
			    {error && <FormFeedback>{error}</FormFeedback>}
			  </FormGroup>
			)
	}
}

export default props => <Field component={FieldInput} {...props} />
