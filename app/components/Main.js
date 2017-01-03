import React from 'react';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';


const Main = props => {
	return (

		<main role="main">
			<NavbarContainer />
			{props.children}
		</main>

	)
}

export default Main;