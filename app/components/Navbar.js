import React, { PropTypes } from 'react';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Navbar = props => {
	
	let _classNames = props.transparent ? 'transparent' : '';
	
	return (
		<ReactCSSTransitionGroup
              transitionName="shift-fade-down"
              transitionAppear={true}
              transitionAppearTimeout={300}
              transitionEnter={false}
              transitionLeave={false} >
			<nav className={_classNames} role="navigation">{props.children}</nav>
		</ReactCSSTransitionGroup>
	)
}

Navbar.propTypes = {
	transparent : PropTypes.bool.isRequired
}

export default Navbar;