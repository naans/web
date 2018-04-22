import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import {
	Card, CardHeader, CardBody,
  Button, Form, Alert
} from 'reactstrap'
import {Field} from '../Components'
import {post} from '../api'
import store from '../store'

const make = reduxForm({
  form: 'login'
})

const submit = data => post('/auth', data)
  .then(({token}) => store.dispatch({type: 'USER_LOGIN', payload: token}))

export default make(({error, handleSubmit, submitting}) => (
  <Form onSubmit={handleSubmit(submit)}>
    {error && <Alert color="danger">{error}</Alert>}
    <Field type="text" name="name" placeholder="Votre nom d'utilisateur" />
    <Field type="password" name="password" placeholder="Votre mot de passe" />
    <Button type="submit" color="success" disabled={submitting}>Se connecter</Button>
  </Form>
))
