import style from './TastimonialAudioWidget.module.css'
import React, { useEffect, useRef, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
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
