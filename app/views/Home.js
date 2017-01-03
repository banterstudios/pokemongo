import React, { Component, PropTypes } from 'react';

/* Import in the trainer container to be displayed on the home view */
import TrainerContainer from '../containers/Trainer';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';

class Home extends Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      
      /* Load in the current trainor stats */

      /* Load in the trainor pokemon */

   }

   render() {

		return (

			<section className="home">

            {/* Nav bar */}
            <NavbarContainer />

				{/* trainer component */}
            <TrainerContainer trainerId="1" />

            {/* pokemon list - trainor pokemon */}
            
            {/* TODO: add in the pokemon list */}

			</section>

		)

   }

}

Home.propTypes = {
   /* None */
}

export default Home;