import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {merge} from 'ramda'
import {Navbar as BNavbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {onlyAdmin} from '../auth'

const make = connect(
  state => merge(state.adminNavbar, {token: state.user.token}),
	dispatch => ({
    navigateTo: uri => () => dispatch(push(uri)),
    toggle: () => dispatch({type: 'TOGGLE_ADMIN_NAVBAR'}),
		logout: () => {
      dispatch(push('/'))
      dispatch({type: 'USER_LOGOUT'})
    }
	})
)

class Navbar extends React.Component {
  render() {
    const {isOpen, navigateTo, toggle, logout} = this.props
    return (
      <BNavbar color="primary" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/admin/slides/list')}>Photos</NavLink></NavItem>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/admin/categories/list')}>Categories</NavLink></NavItem>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/admin/infos')}>Informations</NavLink></NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem><NavLink href="javascript:" onClick={navigateTo('/admin/password')}>Changer le mot de passe</NavLink></NavItem>
            <NavItem><NavLink href="javascript:" onClick={logout}>Se deconnecter</NavLink></NavItem>
          </Nav>
        </Collapse>
      </BNavbar>
    )
  }
}

export default make(onlyAdmin(Navbar))
