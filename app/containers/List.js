import React, { PropTypes, Component } from 'react';

/* Import the list component */
import ListComponent from '../components/List';

/* Import list item component */
import ListItemComponent from '../components/ListItem';

/*
	Format children into a parent LI element for the list.
*/
const formatChildren = (children) => {
	return (
		React.Children.map(children, (child, index) => {
			return (
				<ListItemComponent 
					index={index}
					child={child}
				/>
			)
		})
	)
}

class List extends Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<ListComponent>
				{formatChildren(this.props.children)}
			</ListComponent>
		)
	}

}

List.propTypes = {

}

export default List;