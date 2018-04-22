import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {map} from 'ramda'
import {
  Row, Col, Button, Badge,
  Card, CardTitle, CardText, CardImg, CardBody
} from 'reactstrap'
import {get} from '../api'

const make = connect(
	state => ({cards: state.cards || []}),
	dispatch => ({
    init: cards => dispatch({type: 'CARDS_INIT', payload: cards}),
    navigateTo: uri => () => dispatch(push(uri))
	})
)

class Cards extends React.Component {
  componentWillMount() {
    const {init} = this.props
    get('/categories?where=showOnHomePage:true')
    .then(map(_ => ({
      id: _.id, 
      title: _.name, 
      picture: _.picture, 
      description: _.description,
      url: `/repas/${_.name}`
    })))
    .then(init)
  }
  render() {
    const {cards, navigateTo} = this.props
    return (
      <div>
      <Row>
      {cards.map(({id, title, picture, description, price, url}) =>
        <Col key={id} xs="12" sm="6" md="3">
          <Card>
            <CardImg src={picture} alt={title} />
          </Card>
          <a className="btn btn-primary" style={{display: 'block'}} href="javascript:" onClick={navigateTo(url)}>{title}</a>
        </Col>
      )}
      </Row>
      <hr/>
      </div>
    )
  }
}

export default make(Cards)
