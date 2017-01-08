import * as ActionTypes from './actiontypes';

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
