import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { reducer as formReducer } from 'redux-form'
import reducers from './reducers'

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
    form: formReducer
  }),
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
)

export default store
