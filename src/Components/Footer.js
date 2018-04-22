import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {path} from 'ramda'
import {Button, Navbar as BNavbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {get} from '../api'
import {INFOS_ID} from '../config'

const make = connect(
  state => path(['data', 'infos'], state) || {loadingItem: true}
)

class Footer extends React.Component {
  render() {
    const {loadingItem, item} = this.props
    if (loadingItem) return null
    const {facebook, google} = item
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
