import * as ActionTypes from './actiontypes';

export const toggleSelectedPokemon = id => ({
	type : ActionTypes.TOGGLE_SELECTED_POKEMON,
	id
})