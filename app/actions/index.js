/* Action types */
import * as ActionTypes from './actiontypes'

/* Services */
import * as Api from '../services'

/* Pokemon */

export const addPokemon = pokemon => ({
  type: ActionTypes.ADD_POKEMON,
  pokemon
})

export const toggleSelectedPokemon = id => ({
  type: ActionTypes.TOGGLE_SELECTED_POKEMON,
  id
})

/* User */
export const userFailedLogin = error => ({
  type: ActionTypes.USER_FAILED_LOGIN,
  error
})

export const userLoggingIn = () => ({
  type: ActionTypes.USER_LOGGING_IN
})

export const userLoggedIn = () => ({
  type: ActionTypes.USER_LOGGED_IN
})

export const userFailedRegister = error => ({
  type : ActionTypes.USER_FAILED_REGISTER,
  error
})

export const userRegistering = () => ({
  type : ActionTypes.USER_REGISTERING
})

export const userRegistered = () => ({
  type : ActionTypes.USER_REGISTERED
})

/*
*	@name performLogin
*	@param {string} email - users email
*	@param {string} password - users password
*	@return {function} Api.login - api for posting username and password return a promise
*	@description invokes an ajax call with username and password
*/
export const performLogin = (email, password) => {
  return dispatch => {
    dispatch(userLoggingIn())

    return Api.login(email, password)
		.then( response => {
      dispatch(userLoggedIn())
    })
		.catch( error => {
      dispatch(userFailedLogin('failed'))
    })
  }
}

/*
  @name performRegistration
  @param {string} username - users username
  @param {string} email - users email
  @param {string} password - users password
  @return {function} api.register - api for registering user returning a promise.
  @description invokes an ajax call with registration details.
*/

export const performRegistration = (username, email, password) => {
  return dispatch => {
    dispatch(userRegistering())

    return Api.register(username, email, password)
    .then(response => {
      dispatch(userRegistered())
    })
    .catch(error => {
      dispatch(userFailedRegister('failed'))
    })
  }
}


/* Trainer */

export const failedToGetTrainer = error => ({
  type : ActionTypes.FAILED_TO_FETCH_TRAINER_INFO,
  error
})

export const fetchingTrainerInfo = () => ({
  type : ActionTypes.FETCHING_TRAINER_INFO
})

export const fetchedTrainerInfo = trainer => ({
  type : ActionTypes.FETCHED_TRAINER_INFO,
  trainer
})

/*
  @name fetchedTrainerInfo
  @description - invokes an ajax to get trainer information for a given user.
  @return {function} Api.getTrainerInfo - returns a promise with the response.
*/
export const fetchTrainerInfo = () => {
  return dispatch => {
    dispatch(fetchingTrainerInfo())

    return Api.getTrainerInfo()
    .then( response => {
      setTimeout(()=>{
        dispatch(fetchedTrainerInfo(response))
      },2000)
    })
    .catch( error => {
      dispatch(failedToGetTrainer(error))
    })
  }
}
