import styles from './WeatherCard.module.css'
import loadingIcon from '../static/icons/loading.svg'
import React, { useEffect, useState } from 'react'
import WeatherBottom from './WeatherBottom'

export default function WeatherCard (props) {
  let id = parseInt(props.id)

  const [precipName, setPrecipName] = useState('')
  const [precipValue, setPrecipValue] = useState('')

  useEffect(() => {
    if (props.weatherData.state === -1) {
      setPrecipValue('')
      setPrecipName('')
    } else if (id !== 0) {
      setPrecipValue(props.weatherData.data?.daily)
      setPrecipName('Precipitations : ')
    } else {
      setPrecipValue('')
      setPrecipName('')
    }
  }, [props.weatherData, id])

  return (
    <div className={id !== 0 ? styles.bottomCards : styles.topCard}>
      <div className={styles.top}>
        <div className={styles.conditions}>
          <img
            src={
              props?.weatherData?.state === -1
                ? loadingIcon
                : props.weatherData.data.daily[id].icon
            }
            alt='Affichage de la météo'
            className={`${styles.img}`}
          />
          <p>
            {props.weatherData.state === -1
              ? ''
              : props.weatherData.data?.daily[id].conditions}
          </p>
        </div>
        <div className={styles.temperature}>
          <p>
            {props.weatherData.state === -1
              ? ''
              : props.weatherData.data?.daily[id].temp}
            °C
          </p>
        </div>
      </div>
      <WeatherBottom
        precipName={precipName}
        precipValue={precipValue}
        weatherData={props.weatherData}
        id={id}
      />
    </div>
  )
}
