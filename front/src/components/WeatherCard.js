import styles from './WeatherCard.module.css'
import loadingIcon from '../static/icons/loading.svg'
import React from 'react';

export default function WeatherCard(props) {

    let id = parseInt(props.id);

    return (
        <div className={id !== 0 ? styles.bottomCards : styles.topCard}>
            <div className={styles.top}>
                <div className={styles.conditions}>
                    <img
                        src={props.weatherData.state === -1 ? loadingIcon : props.weatherData.data.daily[id].icon}
                        alt='Affichage de la météo'
                        className={`${styles.img}`}
                    />
                    <p>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[id].conditions}</p>
                </div>
                <div className={styles.temperature}>
                    <p>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[id].temp}°C</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p><span>{props.weatherData.state === -1 ? "" : id !== 0 ? "Precipitations : " : ''}</span> {props.weatherData.state === -1 ? "" : id !== 0 ? props.weatherData.data?.daily[id].precip + "%" : ''}</p>
                <p><span>Humidité : </span>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[id].humidity}%</p>
                <p><span>Vent : </span>{props.weatherData.state === -1 ? "" : props.weatherData.data?.daily[id].wind} km/h</p>
            </div>
        </div>
    )
}
