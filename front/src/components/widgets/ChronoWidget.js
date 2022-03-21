import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import styles from "./ChronoWidget.module.css"

export default function ChronoWidget(props) {
  return (
    <div className={styles.container}>
      <div>{props?.time?props?.time + 'min' : '...'}</div>
    <AccessTimeFilledIcon sx={{color:"#38679D"}}/>
    </div>
  )
}
