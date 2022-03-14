import React from 'react'
import styles from './Planning.module.css'
import BoatDetailTableWidget from "./widgets/BoatDetailTablePlanningWidget"

export default function Planning(props) {
  return (
    <div className={styles.disposition}>
      <BoatDetailTableWidget timetables={props?.planning?.week} state={props?.state}/>
    </div>
  )
}
