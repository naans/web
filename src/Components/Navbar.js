import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {merge, path, prop, sortBy} from 'ramda'
import {Navbar as BNavbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {INFOS_ID} from '../config'
import {get} from '../api'

const make = connect(
  state => merge(state.navbar, {
    phone: path(['data', 'infos', 'item', 'phone'], state),
    categories: path(['data', 'categories', 'items'], state) || []
  }),
	dispatch => ({
    loadInfos: item => dispatch({type: 'DATA_ITEM_LOADED', payload: {collection: 'infos', item}}),
    loadCategories: items => dispatch({type: 'DATA_COLLECTION_LOADED', payload: {collection: 'categories', items}}),
    loadUser: () => dispatch({type: 'USER_LOAD'}),
		navigateTo: uri => () => dispatch(push(uri)),
		toggle: () => dispatch({type: 'TOGGLE_NAVBAR'})
	})
)

class Navbar extends React.Component {
  componentWillMount() {
    const {loadUser, loadInfos, loadCategories} = this.props
    loadUser()
    get(`/infos/${INFOS_ID}`).then(loadInfos)
    get('/categories').then(loadCategories)
  }
  render() {
    const {phone, isOpen, navigateTo, toggle} = this.props
    const categories = sortBy(prop('priority'), this.props.categories.filter(prop('showOnNavbar')))
    return (
      <BNavbar color="dark" dark expand="md">
        <NavbarBrand href="javascript:" onClick={navigateTo('/')}>Naans Restaurant & FastFood</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          {categories.map(({name}) => 
            <NavItem key={name}><NavLink href="javascript:" onClick={navigateTo(`/repas/${name}`)}>{name}</NavLink></NavItem>
          )}
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
