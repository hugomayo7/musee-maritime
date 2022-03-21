import styles from './MeteoWidget.module.css'
import { useEffect, useRef } from 'react'
import loadingIcon from '../../static/icons/loading.svg'
import { Link } from 'react-router-dom'

function MeteoWidget(props) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  

  return (
    <Link to={'meteo'}>
      <div className={`${styles.disposition}`}>
        <div className={`${styles.texts}`}>
          <span>{props.meteo.state !==-1 ? props.meteo.data.daily[0].conditions : ''}</span>
          {props.meteo.state === -1 ? (
            <span className={`${styles.separation}`} />
          ) : (
            <></>
          )}
          <span>
            {' '}
            {props.meteo.state === -1 ? '--' : props.meteo.data.daily[0].temp}°C
          </span>
        </div>
        <img
          src={props.meteo.state === -1 ? loadingIcon : props.meteo.data.daily[0].icon}
          alt='Affichage de la météo'
          className={`${styles.img}`}
        />
      </div>
    </Link>
  )
}

export default MeteoWidget
