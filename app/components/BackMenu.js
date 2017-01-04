import React, { PropTypes } from 'React';

const BackMenu = (props) => <i className="back-button" onClick={props.onToggle} />

BackMenu.propTypes = {
	onToggle   : PropTypes.func.isRequired,
}

export default BackMenu
