import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import {
	Card, CardHeader, CardBody,
  Button, Form, Alert
} from 'reactstrap'
import Field from '../Components/Field'
import {post} from '../api'
import store from '../store'

const make = reduxForm({
  form: 'login'
})

const submit = data => post('/auth', {body: data})
  .then(res => {
    if (res.error)
      throw new SubmissionError({
        _error: res.error
      })
    return res
  })
  .then(({token}) => store.dispatch({type: 'USER_LOGIN', payload: token}))

export default make(({error, handleSubmit, submitting}) => (
  <Form>
    {error && <Alert color="danger">{error}</Alert>}
    <Field type="text" name="name" placeholder="Votre nom d'utilisateur" />
    <Field type="password" name="password" placeholder="Votre mot de passe" />
    <Button disabled={submitting} onClick={handleSubmit(submit)}>Se connecter</Button>
  </Form>
))
