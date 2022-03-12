import React from 'react'
import GalleryPhotoWidget from './widgets/GalleryPhotoWidget'

export default function GalleryPhotos (props) {
  return (
    <>
      {props?.images?.map((el, i) => (
        <GalleryPhotoWidget image={el} key={i} />
      ))}
    </>
  )
}
