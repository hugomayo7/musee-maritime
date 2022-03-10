import React from 'react'
import TastimonialAudioWidget from './widgets/TastimonialAudioWidget'
import BasicTitleWidget from './widgets/BasicTitleWidget'
import styles from './TastimonialsAudios.module.css'




export default function TastimonialsAudios(props) {
  return (
    <>
    <BasicTitleWidget text="...En audios"/>
    <div className={styles.disposition}>
      {props?.audios?.map((el, i) => {
        return (
    <TastimonialAudioWidget audio={el} key={i}/>
    )
  })}
  </div>
  </>
  )
}
