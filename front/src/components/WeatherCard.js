import { divIcon } from 'leaflet'
import React from 'react'
import styles from './WeatherCard.module.css'
import loadingIcon from '../static/icons/loading.svg'

export default function WeatherCard(props) {
console.log("🚀 ~ file: WeatherCard.js ~ line 7 ~ WeatherCard ~ props", props)

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.conditions}>
                    <img
                        src={props.weatherData.state === -1 ? loadingIcon : props.weatherData.data.icon}
                        alt='Affichage de la météo'
                        className={`${styles.img}`}
                    />
                    <p>{props.weatherData.data.conditions}</p>
                </div>
                <div className={styles.temperature}>
                    <p>{props.weatherData.data.temp}°C</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p><strong>Humidité : </strong>{props.weatherData.data.humidity}%</p>
                <p><strong>Vent : </strong>{props.weatherData.data.wind} km/h</p>
            </div>
        </div>
    )
}
