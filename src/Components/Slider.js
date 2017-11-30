import React from 'react'
import {connect} from 'react-redux'
import {prop} from 'ramda'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import data from '../data'

const make = connect(
	prop('slider'),
	dispatch => ({
    init: slides => dispatch({type: 'SLIDER_SLIDES', payload: slides}),
    onExiting: () => dispatch({type: 'SLIDER_EXITING'}),
    onExited: () => dispatch({type: 'SLIDER_EXITED'}),
    next: () => dispatch({type: 'SLIDER_NEXT'}),
    previous: () => dispatch({type: 'SLIDER_PREVIOUS'}),
    goToIndex: index => dispatch({type: 'SLIDER_GOTO_SLIDE', payload: index})
	})
)

class Slider extends React.Component {
  componentWillMount() {
    const {init} = this.props 
    data.slides().then(init)
  }
  render() {
    const {slides, activeIndex, next, previous, goToIndex, onExited, onExiting} = this.props
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{height: 500}}
      >
        <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides.map(({key, picture, description}) => (
          <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={key}
            src={picture}
            altText={description}
          >
            <CarouselCaption captionHeader={description} captionText="" />
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    )
  }
}

export default make(Slider)
