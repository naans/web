import React from 'react'
import {Route, Switch} from 'react-router'
import {Categories, Slides, Meals, Extras} from './Admin/'

export default props => (
  <div>
  	<br/>	
	  <Switch>
	      <Route path="/admin/categories" component={Categories}/>
	      <Route path="/admin/slides" component={Slides}/>
	      <Route path="/admin/meals" component={Meals}/>
	  </Switch>
	  <Extras/>
  </div>
)
