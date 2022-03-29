import React, { useEffect, useState } from 'react'

import styles from './BoatState.module.css'

export default function BoatState (props) {
  const [dotStyle, setDotStyle] = useState(styles.loading)

  useEffect(() => {
    if (props.boatData?.state === 1) {
      setDotStyle(styles.open)
    } else {
      if (props.boatData?.state === 0) {
        setDotStyle(styles.close)
      } else {
        setDotStyle(styles.loading)
      }
    }
  }, [props?.boatData?.state])

  return (
    <div className={`${styles.description}`}>
      <span className={`${styles.dot} ${dotStyle}`} />
      <span className={`${styles.descriptiontext}`}>
        {props.boatData?.stateText}
      </span>
    </div>
  )
}
