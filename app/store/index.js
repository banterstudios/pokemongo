/* Add in reducers */
import pokemonReducer from '../reducers/pokemon';

/* Combine reducers */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	pokemonReducer
})

export default rootReducer