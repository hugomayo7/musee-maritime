import React from 'react'
import styles from './Skel.module.css'

export default function Skel () {
  return (
    <div className={`${styles.skel}`}>
      <div className={`${styles.top}`}></div>
      <div className={`${styles.bot}`}>
        <div className={`${styles.left}`}>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.right}`}></div>
      </div>
    </div>
  )
}
