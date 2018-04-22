import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router'
import {merge} from 'ramda'
import makeList from './list'
import makeAdd from './add'
import makeEdit from './edit'
import makeRemove from './remove'

export {
	makeList as list,
	makeAdd as add,
	makeEdit as edit,
	makeRemove as remove
}

const admin = ({collection, children, urls, uris, fields, list, add, edit, remove}) => {
	urls = merge({
		list: `/admin/${collection}/list`,
		add: `/admin/${collection}/add`,
		edit: `/admin/${collection}/edit/`,
		remove: `/admin/${collection}/remove/`
	}, urls || {})
	uris = merge({
		collection: `/${collection}`,
		item: `/${collection}/`
	}, uris || {})
	children = (children || []).map(child => ({
		title: child.title,
		path: `${urls.edit}:id`,
		ChildAdmin: ({match}) => {
			const id = match.params.id
			const Admin = admin(merge({
				urls: {
					list: `${urls.edit}${id}`,
					add: `${urls.edit}${id}/${child.collection}/add`,
					edit: `${urls.edit}${id}/${child.collection}/edit/`,
					remove: `${urls.edit}${id}/${child.collection}/remove/`
				},
				uris: {
					collection: `/${collection}/${id}/${child.collection}`,
					item: `/${child.collection}/`
				}
			}, child))
			return <Admin/>
		}
	}))

	const List = makeList({collection, urls, uris, ...list})
	const Add = makeAdd({collection, urls, uris, fields, ...add})
	const Edit = makeEdit({collection, urls, uris, fields, ...edit})
	const Remove = makeRemove({collection, urls, uris, ...remove})

	return () => <div>
		<Switch>
		    <Route path={urls.add} component={Add}/>
		    <Route exact path={urls.edit + ':' + collection} component={Edit}/>
		    <Route path={urls.remove + ':' + collection} component={Remove}/>
		    <Route exact path={urls.list} component={List}/>
		</Switch>
		{children.map(({path, title, ChildAdmin}) => <div>
		  <Switch><Route 
		  	exact path={path} 
		  	component={() => <div><hr/><h2>{title}</h2></div>}
		  /></Switch>
		  <Switch><Route path={path} component={ChildAdmin}/></Switch>
		</div>)}
	</div>
}

export default admin
