/* Add in reducers */
import pokemonReducer from '../reducers/pokemon';
import userReducer from '../reducers/user';

/* Combine reducers */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	pokemon : pokemonReducer,
	user    : userReducer
})

export default rootReducer