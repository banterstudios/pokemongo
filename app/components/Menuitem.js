import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const Menuitem = props => {
	return (
		<li className="main-menu-item" >
			<Link to={props.link} >
				<h4 className="text">
					{props.name}
				</h4>
			</Link>
		</li>
	)
}

Menuitem.propTypes = {
	link : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired
}

export default Menuitem