import styles from './TastimonialAudioWidget.module.css'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default function TastimonialAudioWidget (props) {
  // console.log(
  //   '🚀 ~ file: TastimonialAudioWidget.js ~ line 6 ~ TastimonialAudioWidget ~ props',
  //   props
  // )

  return (
    <div className={styles.disposition}>
      <div className={styles.text}>{props?.audio?.title}</div>
      {props?.audio.map(audio => (
        <div key={audio}>
          {/* <IconButton aria-label='play/pause' onClick={() => toggle()}>
          <PlayArrowIcon sx={{ height: 38, width: 38 }}/>
        </IconButton> */}
          <div className={styles.audioTitle}>{audio.title}</div>
          <ReactAudioPlayer src={audio.link} controls />
        </div>
      ))}
    </div>
  )
}
