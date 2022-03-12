import React from 'react'
import TastimonialsTexts from './TastimonialsTexts'
import TastimonialsAudios from './TastimonialsAudios'
import TastimonialsPhotos from './TastimonialsPhotos'
import BasicTitleWidget from './widgets/BasicTitleWidget'
import styles from "./Tastimonials.module.css"


export default function Tastimonials (props) {
  return (
    <>
    <BasicTitleWidget text='Quelques témoignages...' />
    <div className={styles.container}>
      <TastimonialsTexts texts={props?.tastimonials?.texts}/>
      <TastimonialsAudios audios={props?.tastimonials?.audios}/>
      <TastimonialsPhotos />
    </div>
    </>
  )
}
