import React from 'react'
import { Field } from 'redux-form'
import {
	FormGroup, FormFeedback, Input
} from 'reactstrap'

const FieldInput = ({ input, placeholder, type, meta: { touched, error } }) => (
  <FormGroup>
    <Input valid={(touched && error) ? false : undefined} {...input} placeholder={placeholder} type={type} />
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
)

export default props => <Field component={FieldInput} {...props} />
