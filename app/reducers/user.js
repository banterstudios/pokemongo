/* Import action types */
import { 
  USER_FAILED_LOGIN, 
  USER_LOGGED_IN, 
  USER_LOGGING_IN,
  USER_REGISTERING,
  USER_REGISTERED,
  USER_FAILED_REGISTER
} from '../actions/actiontypes'

/* Initial state */
const initialState = {
  isLoggedin    : false,
  isLoggingIn   : false,
  isRegistering : false,
  isRegistered  : false,
  error         : ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case USER_FAILED_LOGIN:
      return { ...state, isLoggedin: false, isLoggingIn: false, error: action.error }

    case USER_LOGGED_IN:
      return { ...state, isLoggingIn: false, isLoggedin: true }

    case USER_LOGGING_IN:
      return { ...state, isLoggingIn: true, isLoggedin : false }

    case USER_REGISTERING:
      return { ...state, isRegistering : true, isRegistered : false }

    case USER_REGISTERED:
      return { ...state, isRegistering : false, isRegistered : true }

    case USER_FAILED_REGISTER:
      return { ...state, isRegistering : false, isRegistered : false, error : action.error }

    default:
      return state

  }
}

export default userReducer
