import React from 'react'
import {curry} from 'ramda'
import store from './store'
import { Redirect } from 'react-router'

export const protect = (isAllowed, Component, uri) =>
	props => isAllowed() 
		? <Component {...props} /> 
		: (uri ? <Redirect to={uri} /> : null)

export const onlyVisitor = (Component, uri) => protect(() => store.getState().user.token == null, Component, uri)
export const onlyAdmin = (Component, uri) => protect(() => store.getState().user.token != null, Component, uri)
