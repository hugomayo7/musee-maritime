import React from 'react'

import styles from './BoatState.module.css'

export default function BoatState (props) {
  
  return (
    <div className={`${styles.description}`}>
      <span
        className={`${styles.dot} ${
          props.boatData?.state === 1
            ? styles.open
            : props.boatData?.state === 0
            ? styles.close
            : styles.loading
        }`}
      />
      <span className={`${styles.descriptiontext}`}>
        {props.boatData?.stateText}
      </span>
    </div>
  )
}
