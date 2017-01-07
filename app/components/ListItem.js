import React, { PropTypes } from 'react';

const ListItem = props => <li key={props.index} className="list-item">{props.child}</li>

ListItem.propTypes = {
	index : PropTypes.number.isRequired,
	child : PropTypes.object.isRequired
}

export default ListItem