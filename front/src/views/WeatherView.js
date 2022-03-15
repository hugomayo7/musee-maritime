import React, { useEffect } from 'react'
import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard'
import styles from './WeatherView.module.css'

export default function WeatherView(props) {

  return (
    <div className={styles.maindiv}>
      <Header title={"Détail de la météo"} />
      <div className={styles.weatherCards}>
        <div className={styles.titleBox}><p className={styles.title}>Aujourd'hui</p></div>
        <div className={styles.today}>
          <WeatherCard weatherData={props?.meteo} />
        </div>
        <div className={styles.forecast}>
          <WeatherCard weatherData={props?.meteo} />
          <WeatherCard weatherData={props?.meteo} />
        </div>
      </div>
    </div>
  )
}
