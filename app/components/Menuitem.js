import React, { PropTypes } from 'react';

const Menuitem = props => {
	return (
		<li className="main-menu-item" onClick={ props.onClick }>
			<h4 className="text">
				{props.name}
			</h4>
		</li>
	)
}

Menuitem.propTypes = {
	name    : PropTypes.string.isRequired,
	onClick : PropTypes.func.isRequired
}

export default Menuitem