import React, { Component, PropTypes } from 'react'

/* Nav bar component */
import NavbarComponent from '../components/Navbar'

/* Image source for trainer image */
import navBarTrainerImgSrc from '../assets/menuTrainer.png'

class Navbar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isMenuOpen: false
    }

      /* Bind this */
    this.onBurgerMenuToggle = this.onBurgerMenuToggle.bind(this)
    this.onBack = this.onBack.bind(this)
  }

  onBurgerMenuToggle () {
    
    this.setState(prevState => ({

      isMenuOpen: !prevState.isMenuOpen

    }), () => {
         
      if (this.props.onBurgerMenuToggle) 
        this.props.onBurgerMenuToggle(this.state.isMenuOpen)
      
    })
  }

  onBack () {
    if (this.props.onBack) 
      this.props.onBack()
  }

  render () {
    return (

      <NavbarComponent 
        transparent={this.props.transparent}
        back={this.props.back}
        name={this.props.name}
        onBack={this.onBack}
        isMenuOpen={this.state.isMenuOpen}
        onBurgerMenuToggle={this.onBurgerMenuToggle}
        imgSrc={navBarTrainerImgSrc}
      />

    )
  }
}

Navbar.defaultProps = {
  name        : '',
  back        : false,
  transparent : false
}

Navbar.propTypes = {
  name               : PropTypes.string,
  back               : PropTypes.bool,
  onBack             : PropTypes.func,
  onBurgerMenuToggle : PropTypes.func,
  transparent        : PropTypes.bool
}

export default Navbar
