import React from 'react'
import styles from './TastimonialPhotoWidget.module.css'

export default function TastimonialPhotoWidget (props) {
  return (
    <div className={styles.disposition}>
      <div className={styles.divimg}>
      <img src={props?.photo.link} alt='bateau' className={styles.img}></img>
      </div>
      {props?.photo.text ? <div className={styles.text}>{props?.photo.text}</div> : <></>}
    </div>
  )
}
