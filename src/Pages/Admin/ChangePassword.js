import React from 'react'
import {Redirect} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {
	Card, CardHeader, CardBody
} from 'reactstrap'
import ChangePasswordForm from '../../Forms/ChangePassword'

export default () => <Card outline color="danger">
    <CardHeader><h3>Changement du mot de passe</h3></CardHeader>
    <CardBody>
      <ChangePasswordForm />
    </CardBody>
</Card>
