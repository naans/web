import React from 'react'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {
  Row, Col,
  ListGroup, ListGroupItem
} from 'reactstrap'
import GoogleMap from './Map'
import data from '../data'

const make = connect(
	prop(['infos']),
	dispatch => ({
    init: infos => dispatch({type: 'INFOS_INIT', payload: infos})
  })
)

class Infos extends React.Component {
  componentWillMount() {
    const {init} = this.props 
    data.infos().then(init)
  }
  render() {
    const {loaded, halal, address, phone, openingTime, shipping, payment, map} = this.props
    return !loaded ? null : (
      <Row>
        <Col sm="12" xs="12" md="4">
          <ListGroup>
            <ListGroupItem>
              <i className="fa fa-cutlery" aria-hidden="true"></i> {halal}
            </ListGroupItem>
            <ListGroupItem>
              <i className="fa fa-map-marker" aria-hidden="true"></i> {address}
            </ListGroupItem>
            <ListGroupItem>
              <i className="fa fa-phone" aria-hidden="true"></i> {phone}
            </ListGroupItem>
            <ListGroupItem>
              <i className="fa fa-clock-o" aria-hidden="true"></i> {openingTime}
            </ListGroupItem>
            <ListGroupItem>
              <i className="fa fa-motorcycle" aria-hidden="true"></i> {shipping}
            </ListGroupItem>
            <ListGroupItem>
              <i className="fa fa-credit-card" aria-hidden="true"></i> {payment}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col sm="12" xs="12" md="8">
          <GoogleMap />
        </Col>
      </Row>
    )
  }
}

export default make(Infos)
