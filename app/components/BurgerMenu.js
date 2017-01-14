import React, { PropTypes } from 'React'

/* Utilities */
import classNames from 'classnames'

const BurgerMenu = props => {

  let _classNames = classNames('burger-menu', {'active' : props.isMenuOpen })

  return (

    <div className={_classNames} onClick={props.onToggle}>
      <div className='burger' />
    </div>

  )
}

BurgerMenu.propTypes = {
  onToggle   : PropTypes.func.isRequired,
  isMenuOpen : PropTypes.bool.isRequired
}

export default BurgerMenu
