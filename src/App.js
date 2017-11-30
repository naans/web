import React from 'react'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import {Container} from 'reactstrap'

import store, {history} from './store'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Meals from './Pages/Meals'
import Login from './Pages/Login'
import Admin from './Pages/Admin'

const App = props => (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Navbar />
          <Container>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/repas/:category" component={Meals}/>
                <Route path="/login" component={Login}/>
                <Route exact path="/admin" component={Admin}/>
                <Route component={Home}/>
            </Switch>
          </Container>
          <br />
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  </div>
)

export default App
