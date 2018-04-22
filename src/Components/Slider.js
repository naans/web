import React from 'react'
import {connect} from 'react-redux'
import {path, merge, map} from 'ramda'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import {get} from '../api'

const make = connect(
  state => merge(state.slider, path(['data', 'slides'], state) || {loadingItems: true}),
  dispatch => ({
    init: () => dispatch({type: 'DATA_LOADING_COLLECTION', payload: {collection: 'slides'}}),
    load: items => {
      dispatch({type: 'DATA_COLLECTION_LOADED', payload: {collection: 'slides', items}})
      dispatch({type: 'SLIDER_LENGTH', payload: items.length})
    },
    onExiting: () => dispatch({type: 'SLIDER_EXITING'}),
    onExited: () => dispatch({type: 'SLIDER_EXITED'}),
    next: () => dispatch({type: 'SLIDER_NEXT'}),
    previous: () => dispatch({type: 'SLIDER_PREVIOUS'}),
    goToIndex: index => dispatch({type: 'SLIDER_GOTO_SLIDE', payload: index})
	})
)

class Slider extends React.Component {
  componentWillMount() {
    const {init, load} = this.props
    init() 
    get('/slides')
    .then(map(_ => merge(_, {key: _.id})))
    .then(load)
  }
  render() {
    const {loadingItems, items, activeIndex, next, previous, goToIndex, onExited, onExiting} = this.props
    if (loadingItems || items.length == 0) return null
    return <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{height: 500}}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {items.map(({id, picture, description}) => (
          <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={id}
            src={picture}
            altText={description}
          >
            <CarouselCaption captionHeader={description} captionText="" />
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    <hr/>
    </div>
  }
}

export default make(Slider)
