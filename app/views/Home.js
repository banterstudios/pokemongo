import React, { Component, PropTypes } from 'react';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';

/* Main Menu */
import MainMenuContainer from '../containers/Menu';

/* Pokedex */
import PokedexContainer from '../containers/Pokedex';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {

   constructor(props) {
      super(props)

      this.state = {
         menuOpen : false
      }

      this.onBurgerClick = this.onBurgerClick.bind(this);
      this.renderMenuContainer = this.renderMenuContainer.bind(this);
   }

   componentDidMount() {

   }

   onBurgerClick(isMenuOpen){
      window.dev&&console.log('sd!');
      this.setState({
         menuOpen : isMenuOpen
      })
   }

   renderMenuContainer(){
      if(this.state.menuOpen){
         return (
            <MainMenuContainer />
         )
      }else{
         return null;
      }

   }

   render() {

		return (

			<section className="home">

            {/* Nav bar */}
            <NavbarContainer 
               name={this.props.navName}
               onBurgerClick={this.onBurgerClick}
               onBurgerMenuToggle={this.onBurgerClick}
            />
            
            {/* TODO: add in the pokemon list */}
            <PokedexContainer />

            {/* Main Menu */}
            <ReactCSSTransitionGroup
               transitionName="shift-fade-up"
               transitionEnter={true}
               transitionLeave={true} 
               transitionEnterTimeout={300}
               transitionLeaveTimeout={300}>
               {this.renderMenuContainer()} 
            </ReactCSSTransitionGroup>
            

			</section>

		)

   }

}

Home.defaultProps = {
   navName : 'Pokedex'
}

Home.propTypes = {
   /* None */
   navName : PropTypes.string
}

export default Home;