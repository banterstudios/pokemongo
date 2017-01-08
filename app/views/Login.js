import React, { Component, PropTypes } from 'react';

/* Login form */
import LoginFormContainer from '../containers/LoginForm';

/* Redux connect */
import { connect } from 'react-redux';

/* Actions */
import { performLogin } from '../actions';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Components */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Login background */
import LoginBackground from '../assets/loginbackground.jpg';

/* Login pokemon image */
import LoginLogoImage from '../assets/logo.png';

class Login extends Component {

   constructor(props) {
      super(props)

      /* Bind this */
      this.onSubmit = this.onSubmit.bind(this)

   }

   onSubmit(email, password){
   		window.dev&&console.log(email,password)
   		this.props.performLogin(email, password)
   		.then(()=>{
   			this.context.router.push(`/`)
   		})
   		.catch(()=>{
   			window.dev&&console.log('failed to log in!')
   		})
   }

   render() {
   	return (
   		<section className="login">
   			
         <ReactCSSTransitionGroup
            transitionName="fade-in"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnter={false}
            transitionLeave={false} >
            
            <BackgroundImageComponent 
               imageSrc={LoginBackground}
               classNames="login-background"
            />

         </ReactCSSTransitionGroup>

         <ReactCSSTransitionGroup
            transitionName="shift-fade-up"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnter={false}
            transitionLeave={false} >
            
            <div className="spaced-card-wrapper" key="spaced-card-wrapper-login-form" >
               
               <div className="fill"></div>
                
               <div className="spaced-card-container">
               
                  <BackgroundImageComponent
                     imageSrc={LoginLogoImage}
                     classNames="login-image"
                  />

                  <LoginFormContainer 
                     onSubmit={this.onSubmit}
                  />
            
               </div>

            </div>

           </ReactCSSTransitionGroup>

   		</section>
   	)
   }
}


Login.contextTypes = {
	router : PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
   	isLoggingIn : state.user.isLoggingIn
})


export default connect(mapStateToProps, { performLogin })(Login)