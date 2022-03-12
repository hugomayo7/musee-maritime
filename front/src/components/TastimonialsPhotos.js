import React from 'react'
import TastimonialPhotoWidget from './widgets/TastimonialPhotoWidget'
import BasicTitleWidget from './widgets/BasicTitleWidget'



export default function TastimonialsPhotos(props) {
  return (
    <>
    <BasicTitleWidget text="...En photos"/>
    <div>
        {props?.photos?.map((el, i) => {
          return (
            <div key={i}>
              <TastimonialPhotoWidget photo={el} />
            </div>
          )
        })}
      </div>
    </>
  )
}
