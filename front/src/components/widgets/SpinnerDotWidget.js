import React from 'react'
import styles from './SpinnerDotWidget.module.css'

export default function SpinnerDotWidget () {
  return (
    <>
      <div className={`${styles.spinner}`}>
        <div className={styles.spinnerdotchild} />
        <div className={styles.spinnerdotchild} />
        <div className={styles.spinnerdotchild} />
      </div>
    </>
  )
}
