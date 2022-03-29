import React from 'react'
import styles from './BoatCard.module.css'
import { Link } from 'react-router-dom'

export default function BoatCard (props) {
  return (
    <>
      {props?.boat ? (
        <Link
          to={'/bateaux/' + props?.boat?.id}
          className={`${styles.maincard}`}
        >
          <img src={props?.boat?.image} alt='Boat'></img>
          <span>{props?.boat?.name}</span>
        </Link>
      ) : (
        <div className={`${styles.maincard} ${styles.empty}`}></div>
      )}
    </>
  )
}
