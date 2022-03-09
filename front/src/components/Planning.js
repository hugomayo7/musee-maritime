import React from 'react'
import styles from './Planning.module.css'
import BoatDetailTableWidget from "./widgets/BoatDetailTableWidget"

export default function Planning(props) {
  return (
    <div className={styles.disposition}>
      <BoatDetailTableWidget timetables={props?.planning?.week}/>
      <div className={styles.visittime}><span>Durée de la visite : </span><span>{props?.planning?.visitTime}min</span></div>
    </div>
  )
}
