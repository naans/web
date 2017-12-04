import React from 'react'
import {Provider} from 'react-redux'
import {Container} from 'reactstrap'
import {Route, Switch} from 'react-router'
import store, {history} from './store'
import {ConnectedRouter} from 'react-router-redux'
import {onlyAdmin, onlyVisitor} from './auth'
import {Navbar, Alerts, Footer, AdminNavbar} from './Components'
import {Home, Meals, Login, Admin} from './Pages'

const App = props => (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Navbar />
          <AdminNavbar />
          <Alerts />
          <Container>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/repas/:category" component={Meals}/>
                <Route path="/login" component={onlyVisitor(Login, '/admin')}/>
                <Route exact path="/admin" component={onlyAdmin(Admin, '/login')}/>
                <Route path="/admin" component={onlyAdmin(Admin, '/login')}/>
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
