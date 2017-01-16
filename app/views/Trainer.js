import React, { Component, PropTypes } from 'react'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

class Trainer extends Component { 
	constructor(props){
		super(props)
	}

	render(){
		return (
			<section className="trainer">

				<NavbarContainer
					name={this.props.navName}
					onBurgerClick={this.onBurgerClick}
					onBurgerMenuToggle={this.onBurgerClick} />

			</section>
		)
	}
}

export default Trainer