import React from 'react'
import styles from "./WeatherBottom.module.css"

export default function WeatherBottom(props) {
  return (
    <div className={styles.bottom}>
        <p>
          <span>{props?.precipName}</span>{' '}
          {props?.precipValue === '' ? props?.precipValue : props?.precipValue[props.id].precip + '%'}
        </p>
        <p>
          <span>Humidité : </span>
          {props?.weatherData.state === -1
            ? ''
            : props?.weatherData.data?.daily[props?.id].humidity}
          %
        </p>
        <p>
          <span>Vent : </span>
          {props?.weatherData.state === -1
            ? ''
            : props?.weatherData.data?.daily[props?.id].wind}{' '}
          km/h
        </p>
      </div>
  )
}
