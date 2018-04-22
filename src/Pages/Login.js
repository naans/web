import React from 'react'
import {Redirect} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {
	Card, CardHeader, CardBody
} from 'reactstrap'
import LoginForm from '../Forms/Login'

const make = connect(prop('user'))

export default make(({token}) => {
  	return (token ? <Redirect to="/admin"/> : 
	  <Card>
	    <CardHeader><h3>Se connecter</h3></CardHeader>
	    <CardBody>
	      <LoginForm />
	    </CardBody>
	  </Card>
	)
})
