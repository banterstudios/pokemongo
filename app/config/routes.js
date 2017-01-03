import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* Main component */
import MainComponent from '../components/Main';

/* Views */
import HomeView from '../views/Home';

let routes = (

	<Router history={hashHistory}>
		<Route path='/' component={MainComponent}>
			<IndexRoute component={HomeView} />
		</Route>
	</Router>
	
);

export default routes;
