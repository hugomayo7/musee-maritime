import React from 'react'
import styles from './WeatherCard.module.css'
import loadingIcon from '../static/icons/loading.svg'

export default function WeatherCard(props) {

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.conditions}>
                    <img
                        src={props.weatherData.state === -1 ? loadingIcon : props.weatherData.data.daily[parseInt(props.id)].icon}
                        alt='Affichage de la météo'
                        className={`${styles.img}`}
                    />
                    <p>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[parseInt(props.id)].conditions}</p>
                </div>
                <div className={styles.temperature}>
                    <p>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[parseInt(props.id)].temp}°C</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>{props.weatherData.state === -1 ? "" : parseInt(props.id) !== 0 ? "Précipitations : " + props.weatherData.data?.daily[parseInt(props.id)].precip + "%": ''}</p>
                <p><span>Humidité : </span>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[parseInt(props.id)].humidity}%</p>
                <p><span>Vent : </span>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[parseInt(props.id)].wind} km/h</p>
            </div>
        </div>
    )
}
