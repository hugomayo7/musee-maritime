import React from 'react'
import TastimonialsTexts from './TastimonialsTexts'
import TastimonialsAudios from './TastimonialsAudios'
import TastimonialsPhotos from './TastimonialsPhotos'
import BasicTitleWidget from './widgets/BasicTitleWidget'


export default function Tastimonials () {
  return (
    <>
      <BasicTitleWidget text='Quelques témoignages...' />
      <TastimonialsTexts />
      <TastimonialsAudios />
      <TastimonialsPhotos />
    </>
  )
}
