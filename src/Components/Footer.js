import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {Button, Navbar as BNavbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import data from '../data'

const make = connect(
  prop('infos'),
	dispatch => ({
    init: infos => dispatch({type: 'INFOS_INIT', payload: infos})
	})
)

class Footer extends React.Component {
  componentWillMount() {
    const {init} = this.props 
    data.infos().then(init)
  }
  render() {
    const {facebook, google} = this.props
    return (
      <BNavbar dark color="dark" expand="md">
          <Nav className="ml-auto" navbar>
            <a className="btn btn-primary" target="_blank" href={facebook} role="button"><i className="fa fa-facebook" aria-hidden="true"></i></a> &nbsp;
            <a className="btn btn-danger" target="_blank" href={google} role="button"><i className="fa fa-google" aria-hidden="true"></i></a> &nbsp;
          </Nav>
      </BNavbar>
    )
  }
}

export default make(Footer)
