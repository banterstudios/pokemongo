import React, { Component, PropTypes } from 'react'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

/* Components */
import TrainerBasicDetails from '../components/TrainerBasicDetails'

import AjaxSpinner from '../components/AjaxSpinner'

/* Redux connect */
import { connect } from 'react-redux'

/* Actions */
import { fetchTrainerInfo } from '../actions'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Trainer extends Component { 
	constructor(props){
		super(props)

		this.renderTrainerBasics = this.renderTrainerBasics.bind(this)
		this.renderAjaxSpinner   = this.renderAjaxSpinner.bind(this)
	}

	componentDidMount(){
		this.props.fetchTrainerInfo()
		.then(() => {
			window.dev&&console.log('fetched!')
		})
		.catch(error => {
			window.dev&&console.error('ERROR: ', error)
		})
	}

	renderTrainerBasics(){
		if(!this.props.fetched)return null

		return (
			<ReactCSSTransitionGroup
            transitionName='shift-fade-up'
            transitionAppear
            transitionAppearTimeout={300}
            transitionEnter={false}
            transitionLeave={false}>
				<TrainerBasicDetails 
					{...this.props.trainer} key="poke-trainer-1"/>
			</ReactCSSTransitionGroup>
		)
	}

	renderAjaxSpinner(){
		if(!this.props.fetching)return null

		return ( <AjaxSpinner /> )
	}

	render(){
		return (
			<section className="trainer">

				<NavbarContainer
					name={this.props.trainer.name || this.props.navName}
					onBurgerClick={this.onBurgerClick}
					onBurgerMenuToggle={this.onBurgerClick} />

				{this.renderTrainerBasics()}

				{this.renderAjaxSpinner()}

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