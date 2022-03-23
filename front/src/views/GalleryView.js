import React, { useEffect, useState } from 'react'
import GalleryPhotos from '../components/GalleryPhotos'
import Header from '../components/Header'
import SpinnerDotWidget from '../components/widgets/SpinnerDotWidget'
import styles from './GalleryView.module.css'

export default function GalleryView (props) {
  const [images, setStateImages] = useState([])
  const [name, setName] = useState([])
  const [id, setIdBoat] = useState([])
  useEffect(() => {
    let _ = []
    let _name = []
    let _idBoat = []
    for (let i = 0; i < props?.boatsData?.length; i++) {
      let el = props?.boatsData[i]
      el.images.forEach(element => {
        _.push(element)
      })
      _name.push(el.name)
      _idBoat.push(el.id)
      console.log(el.id)
    }

    setStateImages(_)
    setName(_name)
    setIdBoat(_idBoat)
  }, [props, setStateImages])

  return (
    <div>
      <Header title={'Galerie'} />
      {props?.boatsData ? (
        <>
          <GalleryPhotos id={id} name={name} images={images} />
        </>
      ) : (
        <div className={styles.skel}>
          <SpinnerDotWidget/>
        </div>
      )}
    </div>
  )
}
