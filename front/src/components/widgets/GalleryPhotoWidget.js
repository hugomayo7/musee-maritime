import React from 'react'
import styles from './GalleryPhotoWidget.module.css'

export default function GalleryPhotoWidget (props) {
  return (
    <>
      <img src={props?.image} className={styles.img} alt='bateau'></img>
    </>
  )
}
