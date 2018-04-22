import React from 'react'
import {Route, Switch, Redirect} from 'react-router'
import {Categories, Slides, Infos, ChangePassword} from './Admin/'

export default props => (
  <div>
  	<br/>	
	  <Switch>
	      <Route path="/admin/categories" component={Categories}/>
	      <Route path="/admin/password" component={ChangePassword}/>
	      <Route path="/admin/slides" component={Slides}/>
	      <Route path="/admin/infos" component={Infos}/>
	      <Redirect to="/admin/categories" />
	  </Switch>
  </div>
)
