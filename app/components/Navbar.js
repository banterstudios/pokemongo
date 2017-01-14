import React, { PropTypes } from 'react'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/* Navbar skeleton Components */
import NavBarComponent from '../components/Navbar'

/* Burger Menu Component */
import BurgerMenuComponent from '../components/BurgerMenu'

/* Back Menu Component */
import BackMenuComponent from '../components/BackMenu'

/* Utilities */
import classNames from 'classnames'

const Navbar = props => {
 
  let _classNames = classNames({'transparent' : props.transparent })

  return (
    <ReactCSSTransitionGroup
      transitionName='shift-fade-down'
      transitionAppear
      transitionAppearTimeout={300}
      transitionEnter={false}
      transitionLeave={false} >
      
      <nav className={_classNames} role='navigation'>
        <div className='left'>
          {
            props.back 
            ?
            <BackMenuComponent onToggle={props.onBack} />
            :
            <BurgerMenuComponent 
            isMenuOpen={props.isMenuOpen} 
            onToggle={props.onBurgerMenuToggle} />
          }
        </div>
        <div className='middle'>
          <h2 className='title'>
            {props.name}
          </h2>
        </div>
        <div className='right'>
          <div className="background" />
          <div className="navbar-trainer-image" style={{backgroundImage:`url('${props.imgSrc}')`}}/>
        </div>
      </nav>

    </ReactCSSTransitionGroup>
  )
}

Navbar.defaultProps = {
  transparent        : false,
  back               : false,
  onBack             : function(){},
  isMenuOpen         : false,
  onBurgerMenuToggle : function(){},
  name               : '',
  imgSrc             : ''
}

Navbar.propTypes = {
  transparent        : PropTypes.bool,
  back               : PropTypes.bool,
  onBack             : PropTypes.func,
  isMenuOpen         : PropTypes.bool,
  onBurgerMenuToggle : PropTypes.func,
  name               : PropTypes.string,
  imgSrc             : PropTypes.string
}

export default Navbar

