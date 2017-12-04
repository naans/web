import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {merge} from 'ramda'
import {Navbar as BNavbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import data from '../data'
import {onlyAdmin, onlyVisitor} from '../auth'

const make = connect(
  state => merge(state.navbar, {phone: state.infos.phone}),
	dispatch => ({
    init: infos => dispatch({type: 'INFOS_INIT', payload: infos}),
    loadUser: () => dispatch({type: 'USER_LOAD'}),
		navigateTo: uri => () => dispatch(push(uri)),
		toggle: () => dispatch({type: 'TOGGLE_NAVBAR'})
	})
)

class Navbar extends React.Component {
  componentWillMount() {
    const {init, loadUser} = this.props
    loadUser()
    data.infos().then(init)
  }
  render() {
    const {phone, isOpen, navigateTo, toggle} = this.props
    return (
      <BNavbar color="dark" dark expand="md">
        <NavbarBrand href="javascript:" onClick={navigateTo('/')}>Naans Restaurant & FastFood</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/repas/sandwitches')}>Sandwitches</NavLink></NavItem>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/repas/assiettes')}>Assiettes</NavLink></NavItem>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/repas/pattes')}>Pattes</NavLink></NavItem>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/repas/desserts')}>Desserts</NavLink></NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <span className="navbar-text"><i className="fa fa-phone" aria-hidden="true"></i> {phone} </span>
          </Nav>
        </Collapse>
      </BNavbar>
    )
  }
}

export default make(Navbar)
