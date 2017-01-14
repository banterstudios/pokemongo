import React from 'react'

const SpacedCard = props => {
  return (
    <div className='spaced-card-wrapper' key='pokemon-details-wrapper' >
      <div className='fill' />
      <div className='spaced-card-container'>
        {props.children}
      </div>
    </div>
  )
}

export default SpacedCard
