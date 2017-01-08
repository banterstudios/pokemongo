/* Action types */
import * as ActionTypes from './actiontypes';

/* Services */
import * as Api from '../services';

/* Pokemon */
export const addPokemon = pokemon => ({
	type : ActionTypes.ADD_POKEMON,
	pokemon
})

export const toggleSelectedPokemon = id => ({
	type : ActionTypes.TOGGLE_SELECTED_POKEMON,
	id
})

/* User */
export const userFailedLogin = error => ({
	type : ActionTypes.USER_FAILED_LOGIN,
	error
})

export const userLoggingIn = () => ({
	type : ActionTypes.USER_LOGGING_IN
})

export const userLoggedIn = () => ({
	type : ActionTypes.USER_LOGGED_IN
})

export const performLogin = (email, password) => {
	return dispatch => {
		
		dispatch(userLoggingIn())
		
		return Api.login(email, password)
		.then((response) => {
			dispatch(userLoggedIn())
		})
		.catch(error => {
			dispatch(userFailedLogin('failed'))
		})

	}
}