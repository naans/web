import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import {
	Card, CardHeader, CardBody,
  Button, Form, Alert
} from 'reactstrap'
import {push} from 'react-router-redux'
import {Field} from '../Components'
import {put} from '../api'
import store from '../store'

const make = reduxForm({
  form: 'password'
})

const submit = data => put('/me', data)
  .then(() => {
    store.dispatch({type: 'ALERT_PUSH', payload: {type: 'success', content: 'Votre mot de passe a ete change'}})
    store.dispatch(push('/admin'))
  })

export default make(({error, handleSubmit, submitting}) => (
  <Form onSubmit={handleSubmit(submit)}>
    {error && <Alert color="danger">{error}</Alert>}
    <Field type="text" name="name" placeholder="Votre nom d'utilisateur" />
    <Field type="password" name="password" placeholder="Votre mot de passe actuel" />
    <Field type="password" name="newPassword" placeholder="Nouveau mot de passe" />
    <Button type="submit" color="danger" disabled={submitting}>Changer le mot de passe</Button>
  </Form>
))
