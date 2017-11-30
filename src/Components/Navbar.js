import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {merge} from 'ramda'
import {Navbar as BNavbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import data from '../data'

const make = connect(
  state => merge(state.navbar, {phone: state.infos.phone, user: state.user}),
	dispatch => ({
    init: infos => dispatch({type: 'INFOS_INIT', payload: infos}),
		navigateTo: uri => () => dispatch(push(uri)),
		toggle: () => dispatch({type: 'TOGGLE_NAVBAR'}),
    logout: () => dispatch({type: 'USER_LOGOUT'})
	})
)

class Navbar extends React.Component {
  componentWillMount() {
    const {init} = this.props 
    data.infos().then(init)
  }
  render() {
    const {phone, user, isOpen, navigateTo, toggle, logout} = this.props
    return (
      <BNavbar color="dark" dark expand="md">
        <NavbarBrand href="javascript:" onClick={navigateTo('/')}>Naans Restaurant</NavbarBrand>
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
            {user.token
              ? <NavItem>
                  <NavLink href="javascript:" onClick={navigateTo('/admin')}>Admin</NavLink>
                  <NavLink href="javascript:" onClick={logout}>Se deconnecter</NavLink>
                </NavItem>
              : <NavItem><NavLink href="javascript:" onClick={navigateTo('/login')}>Se connecter</NavLink></NavItem>
            }
          </Nav>
        </Collapse>
      </BNavbar>
    )
  }
}

export default make(Navbar)
