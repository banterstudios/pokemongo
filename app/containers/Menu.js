import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Menu item data */
import menuItemData from '../data/menuitemdata';

const createMenuItem = items => {
	return items.map(item => {
		return (
			<li className="main-menu-item">
				<Link to={item.link} >
					<h4 className="text">
						{item.name}
					</h4>
				</Link>
			</li>
		)
	})
}

class Menu extends Component{
	
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="main-menu">
				<ul className="main-menu-list">
					{createMenuItem(menuItemData)}
				</ul>
			</div>
		)
	}
}

Menu.propTypes = {

}

export default Menu