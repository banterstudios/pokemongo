import React, { PropTypes } from 'React';


const BurgerMenu = (props) => {
	return (

		<div className="burger-menu" onClick={props.onToggle}>
		  <div className="burger" />
		</div>

	)
}

BurgerMenu.propTypes = {
	onToggle : PropTypes.func.isRequired
}

export default BurgerMenu
