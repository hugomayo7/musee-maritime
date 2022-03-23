import React, { useEffect, useState } from 'react'
import GalleryPhotos from '../components/GalleryPhotos'
import Header from '../components/Header'
import SpinnerDotWidget from '../components/widgets/SpinnerDotWidget'
import styles from './GalleryView.module.css'

export default function GalleryView (props) {
  const [images, setStateImages] = useState([])

  useEffect(() => {
    let _ = []
    for (let i = 0; i < props?.boatsData?.length; i++) {
      let el = props?.boatsData[i]
      el.images.forEach(element => {
        _.push(element)
      })
    }
    setStateImages(_)
  }, [props, setStateImages])

  return (
    <div>
      <Header title={'Plus de photos de la flotte...'} />
      {props?.boatsData ? (
        <>
          <GalleryPhotos images={images} />
        </>
      ) : (
        <div className={styles.skel}>
          <SpinnerDotWidget/>
        </div>
      )}
    </div>
  )
}
