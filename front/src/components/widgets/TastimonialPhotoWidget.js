import React from 'react'
import styles from './TastimonialPhotoWidget.module.css'

export default function TastimonialPhotoWidget (props) {
  // console.log(
  //   '🚀 ~ file: TastimonialPhotoWidget.js ~ line 5 ~ TastimonialPhotoWidget ~ props',
  //   props
  // )
  return (
    <>
      {props?.photo.map(photo => (
        <div className={styles.disposition} key={photo}>
          <div className={styles.divimg}>
            <img
              src={photo.link}
              alt='bateau'
              className={styles.img}
            ></img>
          </div>
          {photo.text ? (
            <div className={styles.text}>{photo.text}</div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  )
}
