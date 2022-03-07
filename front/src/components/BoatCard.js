import React from 'react'
import styles from './BoatCard.module.css'

export default function BoatCard (props) {
  const boat = props?.boat

  return (
    <div className={`${styles.maincard}`}>
      <img src={boat.image} alt='Boat'></img>
      <span>{boat.name}</span>
    </div>
  )
}
