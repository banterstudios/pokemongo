import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './index'

export default function configureStore (initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware, createLogger())
   )

   // if (module.hot) {
   //    module.hot.accept('./', () => {
   //       const nextRootReducer = require('./').default
   //       store.replaceReducer(nextRootReducer)
   //    })
   // }

  return store
}
