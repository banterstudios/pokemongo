/* Import action types */
import { USER_FAILED_LOGIN, USER_LOGGED_IN, USER_LOGGING_IN } from '../actions/actiontypes'



/* Initial state */
const initialState = {
	isLoggedin  : false,
	isLoggingIn : false,
	error       : ''
}

const userReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case USER_FAILED_LOGIN:
			return { ...state, isLoggedin : false, isLoggingIn : false, error : action.error }
		
		case USER_LOGGED_IN:
			return { ...state, isLoggingIn : false, isLoggedin : true }
		
		case USER_LOGGING_IN:
			return { ...state, isLoggingIn : true }

		default:
			return state;

   }

}

export default userReducer