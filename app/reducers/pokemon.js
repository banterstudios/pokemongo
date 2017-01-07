/* Import action types */
import { ADD_POKEMON, TOGGLE_SELECTED_POKEMON } from '../actions/actiontypes'

/* 
	Initial pokemon 
	no server is set up yet, so pull in from local source
*/
import pokedexData from '../data/pokedexdata';

/* Initial state */
const initialState = {
	pokemon : [...pokedexData]
}

const pokemonReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_POKEMON:
			return { ...state, pokemon:action.pokemon }

		case TOGGLE_SELECTED_POKEMON:
			
			/* 
				Loop through all pokemon
				Toggle the pokemon which matches the action id
				otherwise select false.
			*/
			let _pokemonSelected = state.pokemon.map(poke => {
				if(poke.id === action.id){ 
					poke.selected = !poke.selected 
				}else{
					poke.selected = false;
				}
				return poke
			})

			return { ...state, pokemon : _pokemonSelected }

		default:
			return state;

   }

}

export default pokemonReducer