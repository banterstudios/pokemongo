import React, { Component, PropTypes } from 'react';

/* Navbar skeleton Components */
import NavBarComponent from '../components/Navbar';

/* Burger Menu Component */
import BurgerMenuComponent from '../components/BurgerMenu';

/* Image component */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Image source for trainer image */
import navBarTrainerImgSrc from '../assets/menuTrainer.png';

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
                  <BackgroundImageComponent imageSrc={navBarTrainerImgSrc}/>
               </div>
            </NavBarComponent>

   		)

   }

}

Navbar.propTypes = {
   /* None */
}

export default Navbar;