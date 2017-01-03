import React, { Component, PropTypes } from 'react';

/* Components */
import NavBarComponent from '../components/Navbar';

class Navbar extends Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      
   }

   render() {

   		return (

   			<NavBarComponent />

   		)

   }

}

Navbar.propTypes = {
   /* None */
}

export default Navbar;