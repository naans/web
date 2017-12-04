import React from 'react'
import {connect} from 'react-redux'
import {merge, path} from 'ramda'
import {Alert} from 'reactstrap'
import {last} from 'ramda'
import {post, remove} from '../../api'

const IMAGE_MAX_SIZE = 20000000

const make = connect(
	state => merge(state.uploader, {pictures: path(['data', 'pictures', 'items']) || []}),
	dispatch => ({
		start: () => dispatch({type: 'UPLOADER_START'}),
		end: () => dispatch({type: 'UPLOADER_END'}),
		alert: payload => dispatch({type: 'ALERT_PUSH', payload})
	})
)

const read = file => new Promise((resolve, reject) => {
    const reader = new FileReader
    reader.onload = () => resolve(reader.result.substring(1 + reader.result.indexOf(',')))
    reader.onerror = err => reject(err)
    reader.readAsDataURL(file)
})

class Uploader extends React.Component {

	upload(event) {
		const {uploading, start, end, alert, value, onChange} = this.props
			, file = event.target.files[0]
			, failed = err => alert({type: 'danger', content: err.message || err})

		if (uploading)
			return failed('Ooops!')
		if (file.size > IMAGE_MAX_SIZE)
			return failed('L\'image choisie est tres grande!')
		start()
		read(file)
		.then(content => post('/pictures', {content}))
		.then(res => {
			onChange(res)
			if (value) 
				remove('/pictures/' + last(value.split('/')))
			end()
		})
		.catch(err => {
			failed(err)
			end()
		})
	}

	render() {
		const {uploading, value} = this.props
		return ( uploading 
		  ? <Alert color="secondary">Chargement en cours ... merci de patienter</Alert>
		  : <div>
		      {value && <img height="100" src={value} />}<br />
		      <input type="file" onChange={this.upload.bind(this)} />
		    </div>
		)
	}
}

export default make(Uploader)
