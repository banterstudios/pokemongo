import React, { PropTypes, Component } from 'react';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Menu item data */
import menuItemData from '../data/menuitemdata';

/* Components */
import MenuItemComponent from '../components/Menuitem';

const createMenuItem = items => {
	return items.map(item => {
		return (
			<MenuItemComponent
				name={item.name}
				link={item.link} />
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