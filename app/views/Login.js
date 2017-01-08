import React, { Component, PropTypes } from 'react';

/* Login form */
import LoginForm from '../components/LoginForm';

/* Redux connect */
import { connect } from 'react-redux';

/* Actions */
//import { toggleSelectedPokemon } from '../actions';

class Login extends Component {

   constructor(props) {
      super(props)

      /* Bind this */
      this.onSubmit = this.onSubmit.bind(this)

   }

   onSubmit(){
   		this.context.router.push(`/`)
   }

   render() {
	   	return (
	   		<section className="login">
	   			<LoginForm 
	   				onSubmit={this.onSubmit}
	   			/>
	   		</section>
	   	)
   }

}

Login.contextTypes = {
	router : PropTypes.object.isRequired
}


const mapStateToProps = (state, props) => ({
   	isLogged : state.pokemon.pokemon
})

export default Login;