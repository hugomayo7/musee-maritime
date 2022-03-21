import styles from './WeatherCard.module.css'
import loadingIcon from '../static/icons/loading.svg'
import React, { useEffect, useState } from 'react'

export default function WeatherCard (props) {
  let id = parseInt(props.id)

  const [precipName, setPrecipName] = useState('')
  const [precipValue, setPrecipValue] = useState('')

  useEffect(() => {
    if (props.weatherData.state === -1) {
      setPrecipName('')
    } else {
      if (id !== 0) {
        setPrecipName('Precipitations : ')
      } else {
        setPrecipName('')
      }
    }

    if (props.weatherData.state === -1) {
      setPrecipValue('')
    } else {
      if (id !== 0) {
        setPrecipValue(props.weatherData.data?.daily)
      } else {
        setPrecipValue('')
      }
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
      <div className={styles.bottom}>
        <p>
          <span>{precipName}</span>{' '}
          {precipValue === '' ? precipValue : precipValue[id].precip + '%'}
        </p>
        <p>
          <span>Humidité : </span>
          {props.weatherData.state === -1
            ? ''
            : props.weatherData.data?.daily[id].humidity}
          %
        </p>
        <p>
          <span>Vent : </span>
          {props.weatherData.state === -1
            ? ''
            : props.weatherData.data?.daily[id].wind}{' '}
          km/h
        </p>
      </div>
    </div>
  )
}