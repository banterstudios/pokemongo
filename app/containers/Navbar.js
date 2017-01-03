import React, { Component, PropTypes } from 'react';

/* Navbar skeleton Components */
import NavBarComponent from '../components/Navbar';

/* Burger Menu Component */
import BurgerMenuComponent from '../components/BurgerMenu';

class Navbar extends Component {

   constructor(props) {
      super(props)

      /* Bind this */
      this.onBurgerMenuToggle = this.onBurgerMenuToggle.bind(this)
   }

   componentDidMount() {
      
   }

   onBurgerMenuToggle(){
      window.dev&&console.log('clicked!');
   }

   render() {

   		return (

   			<NavBarComponent>
               <div className="left">
                  <BurgerMenuComponent onToggle={this.onBurgerMenuToggle}/>
               </div>
               <div className="middle">
                  <h2 className="title">
                  Pokemon GO
                  </h2>
               </div>
               <div className="right">
                  <i className="trainer-icon"></i>
               </div>
            </NavBarComponent>

   		)

   }

}

Navbar.propTypes = {
   /* None */
}

export default Navbar;