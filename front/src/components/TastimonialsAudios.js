import React from 'react'
import TastimonialAudioWidget from './widgets/TastimonialAudioWidget'
import BasicTitleWidget from './widgets/BasicTitleWidget'
import styles from './TastimonialsAudios.module.css'

export default function TastimonialsAudios (props) {
  return (
    <>
      <BasicTitleWidget text='...En audios' />
      <div className={styles.disposition}>
        {props?.audios?.map((el) => {
          return (
            <div key={el}>
              <TastimonialAudioWidget audio={el} />
            </div>
          )
        })}
      </div>
    </>
  )
}
