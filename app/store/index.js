/* Add in reducers */
import pokemon from '../reducers/pokemon'
import user from '../reducers/user'
import trainer from '../reducers/trainer'

/* Combine reducers */
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pokemon,
  user,
  trainer
})

export default rootReducer
