/* Import action types */
import { ADD_POKEMON } from '../actions'

/* Initial state */
const initialState = {
	pokemon : []
}

const pokemonReducer = (state = initialState, action) => {

	switch (action.type) {

      case ADD_POKEMON:
         return { ...state, pokemon:action.pokemon }

      default:
         return state;

   }

}

export default pokemonReducer