import React, { PropTypes } from 'react';

const Navbar = props => {
	
	let _classNames = props.transparent ? 'transparent' : '';
	
	return (
		<nav className={_classNames} role="navigation">{props.children}</nav>
	)
}

Navbar.propTypes = {
	transparent : PropTypes.bool.isRequired
}

export default Navbar;