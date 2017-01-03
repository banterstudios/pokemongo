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

      /* Set the default state */
      this.state = {
         isMenuOpen : false,
      };

      /* Bind this */
      this.onBurgerMenuToggle = this.onBurgerMenuToggle.bind(this)
   }

   componentDidMount() {
      
   }

   onBurgerMenuToggle(){
      window.dev&&console.log('clicked!');

      /* Toggle the menu state */
      this.setState(prevState => ({
         isMenuOpen : !prevState.isMenuOpen
      }));
   }

   render() {

   		return (

   			<NavBarComponent transparent={this.props.transparent}>
               <div className="left">
                  <BurgerMenuComponent isMenuOpen={this.state.isMenuOpen} onToggle={this.onBurgerMenuToggle}/>
               </div>
               <div className="middle">
                  <h2 className="title">
                     {this.props.name}
                  </h2>
               </div>
               <div className="right">
                  <BackgroundImageComponent imageSrc={navBarTrainerImgSrc}/>
               </div>
            </NavBarComponent>

   		)

   }

}

Navbar.defaultProps = {
   name        : '',
   back        : false,
   transparent : false,
}

Navbar.propTypes = {
  name        : PropTypes.string,
  back        : PropTypes.bool,
  onBack      : PropTypes.func,
  transparent : PropTypes.bool
}

export default Navbar;