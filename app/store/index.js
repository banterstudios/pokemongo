/* Add in reducers */
import pokemonReducer from '../reducers/pokemon';

/* Combine reducers */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	pokemon : pokemonReducer
})

export default rootReducer