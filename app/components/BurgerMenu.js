import React, { PropTypes } from 'React';


const BurgerMenu = (props) => {
	
	let _classNames = props.isMenuOpen ? 'burger-menu active' : 'burger-menu';

	return (

		<div className={_classNames} onClick={props.onToggle}>
		  <div className="burger" />
		</div>

	)
}

BurgerMenu.propTypes = {
	onToggle   : PropTypes.func.isRequired,
	isMenuOpen : PropTypes.bool.isRequired,
}

export default BurgerMenu
