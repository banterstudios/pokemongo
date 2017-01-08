import React, { PropTypes } from 'react';

const List = props => {
	
	let _classNames = props.classNames.indexOf('list-container') >= 0 ? props.classNames : `list-container ${props.classNames}`

	return (
		<ul className={_classNames}>{props.children}</ul>
	)
}

List.defaultProps = {
	classNames : 'list-container'
}

List.propTypes = {
	classNames : PropTypes.string
}

export default List