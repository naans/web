import React from 'react'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {
  Row, Col, Button, Badge, ListGroup, ListGroupItem,
  Card, CardTitle, CardText, CardImg, CardBody
} from 'reactstrap'
import data from '../data'

const make = connect(
	prop('meals'),
	dispatch => ({
    init: payload => dispatch({type: 'MEALS_LOAD', payload})
	})
)

class Meals extends React.Component {
  componentWillMount() {
    const {init} = this.props
    data.meals().then(init)
  }
  render() {
    const category = this.props.match.params.category
    const meals = this.props.items.filter(_ => _.category == category)
    return (
      <Row>
        {meals.map(({name, description, picture, price, extras}) =>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardImg top width="100%" src={picture} alt={name} />
              <CardBody>
                <CardTitle>
                  <div className="pull-right">
                    <Badge pill color="primary">{price} &euro;</Badge>
                  </div>
                  {name}
                </CardTitle>
                <CardText>{description}</CardText>
              </CardBody>
              <ListGroup>
                {extras.map(({name, price}) => 
                  <ListGroupItem>
                    {name}
                    <div className="pull-right">
                      { price > 0 
                        ? <Badge pill color="secondary">+ {price} &euro;</Badge>
                        : <Badge pill color="success">Gratuit</Badge>
                      }
                    </div>
                  </ListGroupItem>
                )}
              </ListGroup>
            </Card>
          </Col>
        )}
      </Row>
    )
  }
}

export default make(Meals)
