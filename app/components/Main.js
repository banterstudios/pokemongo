import React from 'react';

/* Nav bar */
import Navbar from '../containers/Navbar';

function Main(props){
	return (

		<main role="main">
			<Navbar />
			{props.children}
		</main>

	)
};

export default Main;