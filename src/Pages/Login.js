import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {
	Card, CardHeader, CardBody
} from 'reactstrap'
import LoginForm from '../Forms/Login'

const make = connect(
	prop('user'),
	dispatch => ({
		navigateTo: uri => () => dispatch(push(uri))
	})
)

export default make(({token, navigateTo}) => {
	if (token) {
		navigateTo('/admin')()
		return null
	}
  	return (
	  <Card>
	    <CardHeader><h3>Se connecter</h3></CardHeader>
	    <CardBody>
	      <LoginForm />
	    </CardBody>
	  </Card>
	)
})
