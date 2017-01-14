
const Authenticate = (store, nextState, replace) => {
  let { isLoggedin } = store.getState().user

  if (!isLoggedin) {
    replace({
      		pathname: '/login'
    	})
  }
}

export default Authenticate
