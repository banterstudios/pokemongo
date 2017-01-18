/* Get the action types */
import { 
	FETCHING_TRAINER_INFO,
	FETCHED_TRAINER_INFO,
	FAILED_TO_FETCH_TRAINER_INFO
} from '../actions/actiontypes'

const initialState = {
	trainer : {
		trainerType : {
			img  : '',
			name : ''
		},
		name       : '',
		profileImg : '',
		level      : 0,
	},
	fetching   : false,
	fetched    : false,
	error      : '',
}

const trainerReducer = (state = initialState, action) => {
  switch (action.type) {

  	case FETCHING_TRAINER_INFO:
  		return { ...state, fetching: true, fetched: false }	

  	case FETCHED_TRAINER_INFO:
  		return { ...state, trainer: action.trainer, fetched: true, fetching: false }

  	case FAILED_TO_FETCH_TRAINER_INFO:
  		return { ...state, fetched: false, fetching: false, error: action.error }

    default:
      return state

  }
}

export default trainerReducer