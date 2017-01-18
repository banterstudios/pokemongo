/* Login */
export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    return resolve()
  })
}

/* Register */
export const register = (username, email, password) => {
  return new Promise((resolve, reject) => {
    return resolve()
  })
}

/* import fake data */
import { trainerInfo } from '../data/trainer'

/* Trainer */
export const getTrainerInfo = () => {
	return new Promise((resolve, reject) => {
		return resolve(trainerInfo)
	}) 
}
