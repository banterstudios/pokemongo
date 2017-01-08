import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* Main component */
import AppContainer from '../containers/App';

/* Views */
import HomeView from '../views/Home';
import LoginView from '../views/Login';
import PokemonDetailsView from '../views/PokemonDetails';
import AboutView from '../views/About';

/* Store */
import store from '../store/store';

/* Authentication */
import Authenticate from '../auth/Authenticate';

let routes = (

	<Router history={hashHistory}>
		<Route path='/' component={AppContainer}>
			<IndexRoute 
				component={HomeView} 
				onEnter={ 
					(nextState,replace)=>{ Authenticate(store, nextState, replace) } 
				} />
			<Route 
				path='pokemondetails/:id' 
				component={PokemonDetailsView}
				onEnter={ 
					(nextState,replace)=>{ Authenticate(store, nextState, replace) }
				} />
			<Route path='about' component={AboutView} />
			<Route path='login' component={LoginView}  />
		</Route>
	</Router>
	
);

export default routes;
