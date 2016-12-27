import React from 'react';

function Navbar(props){
	return (
		<nav role="navigation">
			<div className="left">
				<i className="burger-icon"></i>
			</div>
			<div className="middle">
				<h2 className="title">
					Pokemon GO
				</h2>
			</div>
			<div className="right">
				<i className="trainer-icon"></i>
			</div>
		</nav>
	)
}

export default Navbar;