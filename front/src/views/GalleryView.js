import React, { useEffect, useState } from 'react'
import GalleryPhotos from '../components/GalleryPhotos'
import Header from '../components/Header'

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
      <Header title={'Galerie'} />
      <GalleryPhotos images={images} />
    </div>
  )
}
