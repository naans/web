import React from 'react'
import {connect} from 'react-redux'
import {path, head} from 'ramda'
import {
  Row, Col,
  ListGroup, ListGroupItem, Badge,
  Card, CardTitle, CardText, CardImg, CardBody
} from 'reactstrap'
import GoogleMap from './Map'
import {get} from '../api'
import {INFOS_ID} from '../config'

const make = connect(
  state => ({
    infos: path(['data', 'infos'], state) || {loadingItem: true},
    featured: path(['data', 'featured'], state) || {loadingItem: true}
  }),
  dispatch => ({
    loadFeatured: item => dispatch({type: 'DATA_ITEM_LOADED', payload: {collection: 'featured', item}})
  })
)

const Item = ({content, icon}) => content
  ? <ListGroupItem><i className={`fa fa-${icon}`} aria-hidden="true"></i> {content}</ListGroupItem>
  : null

class Infos extends React.Component {
  componentWillMount() {
    const {loadFeatured} = this.props
    get('/meals?where=featured:true&limit=1')
    .then(head)
    .then(loadFeatured)
  }
  render() {
    if (this.props.infos.loadingItem || this.props.featured.loadingItem) 
      return null
    const {infos, featured} = this.props
    
    const {halal, address, phone, openingTime, shipping, payment} = infos.item
    const details = <ListGroup>
      <Item icon="cutlery" content={halal} />
      <Item icon="map-marker" content={address} />
      <Item icon="phone" content={phone}/>
      <Item icon="clock-o" content={openingTime}/>
      <Item icon="motorcycle" content={shipping}/>
      <Item icon="credit-card" content={payment}/>
    </ListGroup>
    
    if (!featured.item) 
      return <Row>
          <Col sm="12" xs="12" md="5">{details}</Col>
          <Col sm="12" xs="12" md="7"><GoogleMap /></Col>
      </Row>

    const {name, description, picture, price, extras = []} = featured.item
    return <Row>
        <Col sm="12" xs="12" md="3">
          <h3>Plat du jour</h3>
          <Card style={{marginTop: 0}}>
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
        <Col sm="12" xs="12" md="4">{details}</Col>
        <Col sm="12" xs="12" md="5"><GoogleMap /></Col>
    </Row>
  }
}

export default make(Infos)
