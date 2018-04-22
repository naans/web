import React from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {path, prop, sortBy} from 'ramda'
import {
  Row, Col, Button, Badge, ListGroup, ListGroupItem,
  Card, CardTitle, CardText, CardImg, CardBody
} from 'reactstrap'
import {get} from '../api'
import Loading from '../Components/Loading'

const make = connect(
	state => ({meals: path(['data', 'meals', 'items'], state) || []}),
  dispatch => ({
    loadMeals: items => dispatch({type: 'DATA_COLLECTION_LOADED', payload: {collection: 'meals', items}})
  })
)

class Meals extends React.Component {
  componentWillMount() {
    const {loadMeals} = this.props
    get('/meals').then(loadMeals)
  }
  render() {
    const name = this.props.match.params.category
        , meals = sortBy(_ => -_.price, this.props.meals.filter(_ => _.category.name == name))
    if (!meals.length)
      return <Loading />
    return (
      <Row>
        {meals.map(({id, name, description, picture, price, extras = []}) =>
          <Col key={id} xs="12" sm="6" md="4">
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
                {extras.map(({id, name, price}) => 
                  <ListGroupItem key={id}>
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
