import React from 'react'
import {connect} from 'react-redux'
import {pick} from 'ramda'
import {Alert} from 'reactstrap'

const make = connect(
  state => ({alerts: state.alerts || []})
)

export default make(({alerts}) => (
  <div className="alerts-container">
    {alerts.map(({id, type, content}) => (
      <Alert key={id} color={type}> {content} </Alert>
    ))}
  </div>
))
