import style from './TastimonialAudioWidget.module.css'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default function TastimonialAudioWidget (props) {



  return (
    <div className={style.disposition}>
      <div>{props?.audio?.title}</div>
      <div>
        {/* <IconButton aria-label='play/pause' onClick={() => toggle()}>
          <PlayArrowIcon sx={{ height: 38, width: 38 }}/>
        </IconButton> */}
        <ReactAudioPlayer
          src={props?.audio?.link}
          controls
        />
      </div>
    </div>
  )
}
