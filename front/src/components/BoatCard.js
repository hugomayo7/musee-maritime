import React from 'react'
import styles from './BoatCard.module.css'
import {Link} from 'react-router-dom'

export default function BoatCard (props) {
  const boat = props?.boat

  return (
    <Link to={"/bateaux/" + boat.id} className={`${styles.maincard}`}>
      <img src={boat.image} alt='Boat'></img>
      <span>{boat.name}</span>
    </Link>
  )
}
