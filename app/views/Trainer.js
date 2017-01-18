import React, { Component, PropTypes } from 'react'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

/* Components */
import TrainerBasicDetails from '../components/TrainerBasicDetails'

import TrainerBasicPlaceholderDetails from '../components/TrainerBasicPlaceholderDetails'

/* Redux connect */
import { connect } from 'react-redux'

/* Actions */
import { fetchTrainerInfo } from '../actions'

class Trainer extends Component { 
	constructor(props){
		super(props)

		this.renderTrainerBasics = this.renderTrainerBasics.bind(this)
	}

	componentDidMount(){
		/*
			If the app has already requested to receive the trainer information
			then exit early.
		*/
		if(this.props.fetched || this.props.fetching)return false;

		this.props.fetchTrainerInfo()
		.then(() => {
			window.dev&&console.log('fetched!')
		})
		.catch(error => {
			window.dev&&console.error('ERROR: ', error)
		})
	}

	renderTrainerBasics(){

		if(!this.props.fetched){
			return ( <TrainerBasicPlaceholderDetails /> )
		}

		return (
			<TrainerBasicDetails {...this.props.trainer}/>
		)
	}

	render(){
		return (
			<section className="trainer">

				<NavbarContainer
					name={this.props.trainer.name || this.props.navName}
					onBurgerClick={this.onBurgerClick}
					onBurgerMenuToggle={this.onBurgerClick} />

				{this.renderTrainerBasics()}



			</section>
		)
	}
}

Trainer.defaultProps = {
	navName : 'Trainer'
}

Trainer.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
 ...state.trainer
})

export default connect(mapStateToProps, { fetchTrainerInfo })(Trainer)