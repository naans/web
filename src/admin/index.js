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

export default ({collection, urls, uris, fields, list, add, edit, remove}) => {
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
	const List = makeList({collection, urls, uris, ...list})
	const Add = makeAdd({collection, urls, uris, fields, ...add})
	const Edit = makeEdit({collection, urls, uris, fields, ...edit})
	const Remove = makeRemove({collection, urls, uris, ...remove})

	return () => (
		<Switch>
		    <Route path={urls.add} component={Add}/>
		    <Route path={urls.edit + ':' + collection} component={Edit}/>
		    <Route path={urls.remove + ':' + collection} component={Remove}/>
		    <Route path={urls.list} component={List}/>
		    <Redirect to={urls.list}/>
		</Switch>
	)
}
