import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {pick} from 'ramda'
import {
  Row, Col, Button,
  Card, CardTitle, CardText, CardImg, CardImgOverlay
} from 'reactstrap'
import data from '../data'

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
    data.cards().then(init)
  }
  render() {
    const {cards, navigateTo} = this.props
    return (
      <Row>
      {cards.map(({id, title, picture, description, url}) =>
        <Col key={id} xs="12" sm="6" md="3">
          <Card inverse>
            <CardImg src={picture} alt={title} />
            <CardImgOverlay>
              <CardTitle>{title}</CardTitle>
              <CardText>{description}</CardText>
            </CardImgOverlay>
          </Card>
          <Button block color="primary" onClick={navigateTo(url)}>Voir</Button>
        </Col>
      )}
      </Row>
    )
  }
}

export default make(Cards)
