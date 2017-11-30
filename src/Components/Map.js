import React from 'react'

class Map extends React.Component {
	render() {
		return <div id="react-map" className="map-container"></div>	
	}
	componentDidMount() {
		window.mount()
	}
	componentWillUnmount() {
		window.unmount()
	}
}

export default Map
