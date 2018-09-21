import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {unregister} from './registerServiceWorker'

import 'font-awesome/css/font-awesome.css'

unregister()
ReactDOM.render(<App />, document.getElementById('root'))
